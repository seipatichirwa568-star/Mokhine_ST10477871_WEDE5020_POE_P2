# Apex Logic Systems | WEDE5020 Part 3 Portfolio of Evidence

**Student Name:** Kgothatso Mokhine  
**Student Number:** ST10477871  
**Institution:** Rosebank College  
**Module:** Web Development (Introduction) – WEDE5020  
**Project:** Apex Logic Systems  
**Planned Submission Date:** 02 November 2026  
**GitHub Repository:** [Insert the client's actual GitHub link]  
**Published Website:** [Insert the client's actual Netlify link]

---

## 1. Executive Summary and Project Overview

Apex Logic Systems is a technology business concept based in Pretoria, Gauteng. The website focuses on custom banking and FinTech software, business process automation, cloud integration and software security.

The project was developed in three parts. Part 1 focused on HTML website structure. Part 2 introduced an external CSS stylesheet to improve the appearance and responsive layout. Part 3 introduces JavaScript functionality, SEO improvements and interactive forms.

HTML is used to organise the pages, CSS controls the visual design, and JavaScript allows the website to respond to user actions (MDN Web Docs, s.a.-b; s.a.-c; s.a.-d).

## 2. Website Structure

The project contains six main pages:

| Page | Purpose |
|---|---|
| `index.html` | Homepage and introduction to the business |
| `about.html` | Business information, FAQs and interactive map |
| `service.html` | Searchable technology services |
| `gallery.html` | Technology photographs and image lightbox |
| `enquiry.html` | Project enquiries and service-specific information |
| `contact.html` | General messages and contact information |

## 3. Part 1 Feedback and Part 2 Development

The following information is based on the original Part 2 README supplied by the client. It is a record of development, not an official lecturer marking sheet.

### 3.1 Website Structure and Planning

The original HTML pages were improved through the use of semantic elements, including `header`, `nav`, `main`, `section`, `article` and `footer`.

The purpose was to make the pages easier to read, organise and maintain. The use of structured HTML and external CSS follows introductory web-design principles (Duckett, 2011).

### 3.2 External CSS

The client introduced `css/style.css` to separate website styling from HTML.

CSS variables were used for colours, while Flexbox, spacing and typography improved the layout.

### 3.3 Part 2 Revision Changelog

| Version | Work recorded |
|---|---|
| v1.0 | Created the five original HTML pages. |
| v1.1 | Linked the external CSS stylesheet. |
| v1.2 | Added shared colours, typography and navigation styling. |
| v1.3 | Improved the hero banner and gradient presentation. |
| v1.4 | Introduced tablet and mobile responsive breakpoints. |
| v1.5 | Improved form styling, hover effects and responsive images. |

These stages were supplied in the original README. Actual GitHub commit dates should be checked separately.

## 4. Part 3 Improvements

For Part 3, I focused on adding more functionality and making the website easier to use.

| Area | Improvement |
|---|---|
| Mobile navigation | Added a JavaScript-controlled mobile menu |
| Services | Added search, category filtering and sorting |
| Gallery | Added a lightbox for enlarged photographs |
| Map | Added a Leaflet interactive map of the Pretoria area |
| Enquiry | Added a separate form with service guidance |
| Contact | Added field validation and AJAX submission |
| SEO | Improved titles, descriptions, alternative text and sitemap |
| Documentation | Expanded the changelog and references |

## 5. JavaScript Functionality

### 5.1 Mobile Navigation

I used `getElementById()` and `addEventListener()` to control the mobile navigation menu.

When the visitor clicks the menu button, JavaScript opens or closes the menu and updates its expanded state.

### 5.2 Dynamic Services

The services are stored in a JavaScript array.

The website displays four main service areas:

- Banking and FinTech Software
- Business Process Automation
- Cloud Integration and Migration
- Quality Assurance and Security Reviews

JavaScript is used to create service cards, search for relevant services, filter categories and sort the results alphabetically.

This demonstrates JavaScript arrays, functions and DOM manipulation (MDN Web Docs, s.a.-d).

### 5.3 Gallery Lightbox

The Gallery page allows visitors to click a technology photograph and view a larger version.

JavaScript uses the selected photograph's existing image source to display the enlarged image. This also helps prevent problems caused by incorrect secondary image paths.

### 5.4 Interactive Map

An interactive Leaflet map is included on the About page.

Visitors can zoom and move around the map. The map illustrates the Pretoria area and does not represent a verified office location (Leaflet, s.a.; OpenStreetMap contributors, s.a.).

### 5.5 Enquiry Feedback

The Enquiry page allows visitors to select a technology service and provide project information.

JavaScript changes the guidance according to the selected service. A visitor can also enter a budget, which is displayed as part of the enquiry guidance.

This does not automatically confirm a project price or availability.

## 6. JavaScript Form Validation

Form validation was implemented using methods from the WEDE5020 JavaScript Form Validation lecture slides (The IIE, 2026).

The following techniques were applied:

- `addEventListener()` for user actions.
- `.value.trim()` to read and clean input.
- `if` and `else` statements to check conditions.
- `checkValidity()` to check input rules.
- `showError()` to display error messages.
- `clearError()` to remove corrected errors.
- `isValid` to track validation results.
- `event.preventDefault()` to control form submissions.

The forms check required fields, email addresses, character lengths and suitable input formats.

Error messages appear near incorrect fields so visitors can correct their information (MDN Web Docs, s.a.-a).

Valid information is submitted asynchronously using `fetch()` and `URLSearchParams`.

Netlify Forms is used to process submissions from the published website. Successful local validation does not mean a message has been delivered (Netlify, s.a.).

## 7. Responsive Design

The website uses external CSS to support desktop, tablet and mobile displays.

The original Part 2 document recorded breakpoints at 1024px for tablets and 768px for mobile devices.

Part 3 continues to use responsive CSS techniques, including flexible grids, relative sizing, responsive photographs and mobile navigation (MDN Web Docs, s.a.-b).

The final CSS file should be checked for the exact breakpoints used in the submitted version.

## 8. Search Engine Optimisation

SEO improvements include:

- Unique titles for the different webpages.
- Relevant meta descriptions.
- Structured headings.
- Descriptive image alternative text.
- Internal navigation links.
- Mobile-responsive design.
- A `robots.txt` file.
- A `sitemap.xml` file.

These features support search engine discovery and help describe the website's content (Google Search Central, s.a.).

The sitemap and robots file must use the final Netlify domain.

## 9. Part 3 Development Changelog

| Version | File or feature | Changes made |
|---|---|---|
| v2.0 | CSS and navigation | Improved layout consistency and mobile navigation |
| v2.1 | Services | Added JavaScript-generated cards, search and sorting |
| v2.2 | Gallery | Added a lightbox and improved image paths |
| v2.3 | About | Added an interactive map and FAQ section |
| v2.4 | Enquiry and Contact | Added form validation and AJAX handling |
| v2.5 | SEO | Improved metadata, sitemap and robots instructions |
| v2.6 | README | Expanded documentation, tests and referencing |

These entries describe development stages. They should not be presented as separate GitHub commits unless those commits actually exist.

## 10. Testing Checklist

Complete the following checks before submission:

- [ ] All six webpages open successfully.
- [ ] The mobile menu works.
- [ ] The homepage image displays.
- [ ] Gallery images display and enlarge correctly.
- [ ] Services search, filtering and sorting work.
- [ ] The map displays correctly on Netlify.
- [ ] Contact validation displays appropriate errors.
- [ ] Enquiry validation displays appropriate errors.
- [ ] Contact submissions appear in Netlify.
- [ ] Enquiry submissions appear in Netlify.
- [ ] The correct business email has been confirmed.
- [ ] `robots.txt` and `sitemap.xml` use the live website URL.
- [ ] The website has been tested on desktop and mobile.
- [ ] GitHub contains the final website code.
- [ ] The images have appropriate usage permissions.

## 11. Deployment

**GitHub Repository:** [Insert actual URL]

**Live Netlify Website:** [Insert actual URL]

The website is intended to be deployed through Netlify using the client's GitHub repository.

After publishing, the sitemap and robots file should be updated with the final website address. Both forms must be tested on the published site.

## 12. Limitations

This website is a student business concept rather than a completed production banking platform.

Actual customer projects, certifications, prices and business contact information must be verified before commercial publication.

Gallery photographs are illustrative and require appropriate permission for use.

## 13. Conclusion

Part 3 builds on the HTML and CSS work completed in Parts 1 and 2.

The project now includes interactive JavaScript elements, service searching, a gallery lightbox, a location map, validation and SEO improvements.

The goal was to make the Apex Logic Systems website easier to navigate and more useful for visitors while demonstrating the web-development techniques covered in WEDE5020.

## 14. References

Duckett, J., 2011. *HTML and CSS: Design and build websites*. Indianapolis: John Wiley & Sons.

Google Search Central, s.a. *SEO starter guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 28 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [Online]. Available at: https://leafletjs.com/examples/quick-start/ [Accessed 28 October 2026].

MDN Web Docs, s.a.-a. *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 28 October 2026].

MDN Web Docs, s.a.-b. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 28 October 2026].

MDN Web Docs, s.a.-c. *HTML: HyperText Markup Language*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 28 October 2026].

MDN Web Docs, s.a.-d. *JavaScript*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 28 October 2026].

Netlify, s.a. *Forms setup*. [Online]. Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 28 October 2026].

OpenStreetMap contributors, s.a. *OpenStreetMap*. [Online]. Available at: https://www.openstreetmap.org/ [Accessed 28 October 2026].

The Independent Institute of Education (The IIE), 2026. *WEDE5020: JavaScript form validation*. [Lecture slides]. Rosebank College.

The Independent Institute of Education (The IIE), 2025. *The IIE Harvard–Anglia style reference guide*. [Online]. Available at: https://iielibraryconnect.iie.ac.za/e-shelf/referencing-and-plagiarism [Accessed 28 October 2026].
