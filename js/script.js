/* Apex Logic Systems - WEDE5020 Part 3
   This script uses lesson concepts: getElementById, value.trim(),
   if / else, checkValidity, addEventListener, preventDefault,
   showError, clearError and a boolean isValid.
   Additional functionality: dynamic services, search/sort, lightbox,
   interactive map, enquiry feedback and AJAX form submission.
*/
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation: improve the original Part 2 hamburger menu.
  const menuButton = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  if (menuButton && siteNav) {
    menuButton.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? 'Close ✕' : 'Menu ☰';
    });
  }

  // Lightweight entry animation; stays readable without JavaScript.
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = document.querySelectorAll('.reveal');
    if (items.length) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      document.body.classList.add('js-ready');
      items.forEach(function (item) { observer.observe(item); });
    }
  }

  // Source: the four categories found in the client's original service.html.
  const services = [
    { name:'Banking and FinTech Software', category:'fintech',
      summary:'Discuss account portals, reporting systems and financial workflows.',
      example:'Possible scope: dashboards, financial records and user access rules.' },
    { name:'Business Process Automation', category:'automation',
      summary:'Find ways to reduce repetitive administrative work.',
      example:'Possible scope: approval workflows, automated forms and reporting.' },
    { name:'Cloud Integration and Migration', category:'cloud',
      summary:'Explore moving or connecting existing systems to cloud services.',
      example:'Possible scope: databases, integration planning and continuity.' },
    { name:'Quality Assurance and Security Reviews', category:'security',
      summary:'Plan software testing, maintenance and security assessment discussions.',
      example:'Possible scope: test plans, maintenance schedules and risk reviews.' }
  ];

  // Load cards from JavaScript array, then filter and sort them.
  const serviceGrid = document.getElementById('service-grid');
  const searchInput = document.getElementById('service-search');
  const categoryInput = document.getElementById('service-category');
  const sortInput = document.getElementById('service-sort');
  const searchStatus = document.getElementById('search-status');
  function renderServices() {
    if (!serviceGrid) return;
    const search = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const category = categoryInput ? categoryInput.value : 'all';
    const order = sortInput ? sortInput.value : 'original';
    const filtered = services.filter(function (item) {
      const matchesText = (item.name + ' ' + item.summary + ' ' + item.example)
        .toLowerCase().includes(search);
      const matchesCategory = category === 'all' || category === item.category;
      return matchesText && matchesCategory;
    });
    if (order === 'az') filtered.sort(function (a,b) { return a.name.localeCompare(b.name); });
    if (order === 'za') filtered.sort(function (a,b) { return b.name.localeCompare(a.name); });
    serviceGrid.replaceChildren();
    filtered.forEach(function (item) {
      // Create text nodes rather than injecting untrusted HTML.
      const article = document.createElement('article');
      article.className = 'card service-card';
      const tag = document.createElement('span');
      tag.className = 'tag'; tag.textContent = item.category.toUpperCase();
      const heading = document.createElement('h3'); heading.textContent = item.name;
      const paragraph = document.createElement('p'); paragraph.textContent = item.summary;
      const detail = document.createElement('p'); detail.className='small-note';
      detail.textContent = item.example;
      const link = document.createElement('a'); link.className='btn';
      link.textContent='Enquire about this';
      link.href='enquiry.html?service=' + encodeURIComponent(item.name);
      article.append(tag,heading,paragraph,detail,link);
      serviceGrid.appendChild(article);
    });
    if (!filtered.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No services found. Try another search or select All services.';
      serviceGrid.appendChild(empty);
    }
    if (searchStatus) searchStatus.textContent = filtered.length + ' of ' + services.length + ' services shown';
  }
  if (serviceGrid) {
    if (searchInput) searchInput.addEventListener('input', renderServices);
    if (categoryInput) categoryInput.addEventListener('change',renderServices);
    if (sortInput) sortInput.addEventListener('change',renderServices);
    renderServices();
  }

  // Gallery: use the already-working thumbnail image URL for the large view.
  const photoDialog=document.getElementById('photo-dialog');
  if (photoDialog && typeof photoDialog.showModal === 'function') {
    const largePhoto=document.getElementById('large-photo');
    const photoCaption=document.getElementById('photo-caption');
    document.querySelectorAll('.gallery-btn').forEach(function (button) {
      button.addEventListener('click',function () {
        const thumb=button.querySelector('img');
        if (!thumb) return;
        largePhoto.src=thumb.currentSrc || thumb.src;
        largePhoto.alt=thumb.alt;
        photoCaption.textContent=button.dataset.caption || thumb.alt;
        photoDialog.showModal();
      });
    });
    document.getElementById('close-dialog').addEventListener('click',function () {photoDialog.close();});
    photoDialog.addEventListener('click',function (event) {
      if (event.target===photoDialog) photoDialog.close();
    });
  }

  // Interactive city map: client supplied a Pretoria location, no street address.
  const mapElement=document.getElementById('location-map');
  if (mapElement) {
    if (typeof L !== 'undefined') {
      const map=L.map('location-map').setView([-25.7479,28.2293],12);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:18,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.circle([-25.7479,28.2293], {radius:2400,color:'#007d82',fillOpacity:0.12})
       .addTo(map).bindPopup('Pretoria city-centre area only. Apex Logic Systems office address is not verified.');
    } else {
      mapElement.classList.add('map-fallback');
      mapElement.textContent='The interactive map could not load. Use the map link below.';
    }
  }

  // Enquiry form: explain what can be discussed, never invent a quote.
  const enquiryService=document.getElementById('enquiry-service');
  const guidance=document.getElementById('service-guidance');
  const budget=document.getElementById('enquiry-budget');
  const scopeNotes={
    'Banking and FinTech Software':'Describe the financial workflow, system users and records needed.',
    'Business Process Automation':'Describe the manual task and how often it occurs.',
    'Cloud Integration and Migration':'Describe the existing software and which systems must connect.',
    'Quality Assurance and Security Reviews':'Describe the system, testing needs and requested review.'
  };
  function updateGuidance() {
    if (!enquiryService || !guidance) return;
    const choice=enquiryService.value;
    if (!choice) {guidance.textContent='Choose a service to see guidance for your enquiry.'; return;}
    let text=scopeNotes[choice] || 'Provide details about your project.';
    const amount=budget && budget.value !== '' ? Number(budget.value) : null;
    if (amount !== null && Number.isFinite(amount) && amount >= 0) {
      text += ' Your stated budget is R' + amount.toLocaleString('en-ZA') + '.';
    }
    text += ' A quote and availability will only be confirmed after a discussion.';
    guidance.textContent=text;
  }
  if (enquiryService) {
    const requested=new URLSearchParams(location.search).get('service');
    if (requested && scopeNotes[requested]) enquiryService.value=requested;
    enquiryService.addEventListener('change',updateGuidance);
    if (budget) budget.addEventListener('input',updateGuidance);
    updateGuidance();
  }

  // Lecture's field validation pattern: showError, clearError, checkValidity.
  function showError(form,field,message) {
    const error=form.querySelector('[data-error-for="'+field.id+'"]');
    if (error) {
      error.textContent=message;
      field.setAttribute('aria-describedby',error.id);
    }
    field.setAttribute('aria-invalid','true');
  }
  function clearError(form,field) {
    const error=form.querySelector('[data-error-for="'+field.id+'"]');
    if (error) error.textContent='';
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }
  function checkField(form,field) {
    let message='';
    const value=field.type==='checkbox' ? '' : field.value.trim();
    if (field.type==='checkbox') {
      if (field.required && !field.checked) message='Please tick this box to continue.';
    } else if (field.required && value==='') {
      message='This field is required.';
    } else if (value && field.validity.typeMismatch) {
      message='Please enter a valid email address.';
    } else if (value && field.validity.patternMismatch) {
      message='Please check the phone number format.';
    } else if (value && field.minLength>0 && value.length<field.minLength) {
      message='Enter at least '+field.minLength+' characters.';
    } else if (value && field.maxLength>0 && value.length>field.maxLength) {
      message='The answer is too long.';
    } else if (value && !field.checkValidity()) {
      message='Please enter a valid value within the allowed limits.';
    }
    if (message) {showError(form,field,message);return false;}
    clearError(form,field);
    return true;
  }
  function validateForm(form) {
    let isValid=true;
    form.querySelectorAll('input:not([type="hidden"]),select,textarea').forEach(function(field){
      if (!checkField(form,field)) isValid=false;
    });
    return isValid;
  }
  function feedback(form,message,isError) {
    const status=form.querySelector('.form-status');
    if (status) {
      status.textContent=message;
      status.className='form-status '+(isError ? 'error':'success');
    }
  }

  // Netlify Forms AJAX: only a published Netlify project receives real data.
  document.querySelectorAll('.netlify-form').forEach(function(form) {
    const fields=form.querySelectorAll('input:not([type="hidden"]),select,textarea');
    fields.forEach(function(field) {
      field.addEventListener('blur',function(){field.dataset.touched='yes';checkField(form,field);});
      field.addEventListener('change',function(){field.dataset.touched='yes';checkField(form,field);});
      field.addEventListener('input',function(){if(field.dataset.touched==='yes')checkField(form,field);});
    });
    form.addEventListener('submit',async function(event) {
      event.preventDefault();
      if (!validateForm(form)) {
        feedback(form,'Please correct the highlighted fields.',true);
        const first=form.querySelector('[aria-invalid="true"]');
        if(first)first.focus();
        return;
      }
      const local=location.protocol==='file:' || ['localhost','127.0.0.1'].includes(location.hostname)
        || location.hostname.endsWith('.github.io');
      if(local) {
        feedback(form,'Your information is valid. Use the published Netlify site to send it.',false);
        return;
      }
      const button=form.querySelector('button[type="submit"]');
      if(button)button.disabled=true;
      feedback(form,'Sending your message...',false);
      try {
        // Include form-name so Netlify knows whether it is enquiry or contact.
        const data=new URLSearchParams(new FormData(form));
        const result=await fetch('/',{
          method:'POST',
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          body:data.toString()
        });
        if(!result.ok)throw new Error('Form submission failed: '+result.status);
        feedback(form,'Thank you! Your message was submitted. Please await a response.',false);
        form.reset();
        fields.forEach(function(field){clearError(form,field);delete field.dataset.touched;});
        updateGuidance();
      } catch(error) {
        console.error(error);
        feedback(form,'Your message was not sent. Please try again or use the email option.',true);
      } finally {
        if(button)button.disabled=false;
      }
    });
  });

  // Contact message -> compose email in user's own app (not automatic delivery).
  const emailButton=document.getElementById('email-button');
  const contactForm=document.getElementById('contact-form');
  const BUSINESS_EMAIL='info@apexlogicsystems.co.za'; // Original project; owner MUST confirm.
  if(emailButton && contactForm) {
    emailButton.addEventListener('click',function() {
      if(!validateForm(contactForm)) {
        feedback(contactForm,'Please correct the highlighted fields before preparing an email.',true);
        return;
      }
      const data=new FormData(contactForm);
      const subject=encodeURIComponent('Apex Logic Systems: '+data.get('topic'));
      const message='Name: '+data.get('full-name')+'\nReply email: '+data.get('email')+
        '\nPhone: '+(data.get('phone')||'Not given')+'\nType: '+data.get('topic')+
        '\n\n'+data.get('message');
      location.href='mailto:'+BUSINESS_EMAIL+'?subject='+subject+'&body='+encodeURIComponent(message);
      feedback(contactForm,'Your email application should open. Click Send there to deliver it.',false);
    });
  }
});