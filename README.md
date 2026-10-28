# Apex Logic Systems | WEDE5020 Part 3 Portfolio of Evidence

**Student Name:** Kgothatso Mokhine  
**Student Number:** ST10477871  
**Institution:** Rosebank College  
**Module:** Web Development (Introduction) - WEDE5020  
**Project:** Apex Logic Systems Website  
**Year:** 2026  
**Planned Submission:** 02 November 2026  
**Development Tool:** Visual Studio Code  
**GitHub Branch:** master  
**Documentation Updated:** 29 October 2026  

**GitHub Repository:**  
https://github.com/seipatichirwa568-star/Mokhine_ST10477871_WEDE5020_POE_P2

**GitHub Pages Website:**  
https://seipatichirwa568-star.github.io/Mokhine_ST10477871_WEDE5020_POE_P2/

**Previous Netlify Website:**  
https://apexlogic-st10477871.netlify.app/

Note: The GitHub Pages link must be checked after the final deployment. The Netlify website had a deployment limitation and should not be treated as the confirmed final website.

---

## 1. Project Overview

Apex Logic Systems is a student website project based on a technology business concept in Pretoria, Gauteng.

The business concept focuses on software development, financial technology, business automation, cloud integration and cybersecurity.

The purpose of this website is to introduce the business, explain the services it focuses on and allow visitors to explore possible technology solutions.

The website was developed in three parts.

### Part 1 - HTML

The first part focused on creating the website structure using HTML.

This included navigation, headings, business information, images and basic page content.

### Part 2 - CSS

The second part introduced an external stylesheet to improve the website's appearance.

CSS was used for colours, typography, layout, navigation, responsiveness and visual consistency.

### Part 3 - JavaScript

The third part introduced interactive website functionality.

This included:

- JavaScript-controlled mobile navigation.
- Dynamic service listings.
- Service searching, filtering and sorting.
- Interactive image gallery.
- Interactive Pretoria map.
- Form validation.
- Service enquiry guidance.
- Search engine optimisation.
- Website deployment and documentation.

The project demonstrates how HTML, CSS and JavaScript work together to create an interactive website.

---

## 2. Website Objectives

The objectives of Apex Logic Systems are to:

- Introduce the technology business concept.
- Explain the available technology service areas.
- Help visitors search and filter services.
- Display technology-related photographs.
- Allow visitors to make project enquiries.
- Provide a separate general contact page.
- Improve navigation on smaller screens.
- Make the website accessible across different devices.
- Improve search engine visibility.
- Demonstrate JavaScript functionality from WEDE5020.

The website is a service showcase and enquiry platform. It is not a completed banking system or live financial application.

---

## 3. Website Structure

The website contains six main HTML pages.

| Page | Filename | Description |
|---|---|---|
| Home | index.html | Introduces Apex Logic Systems and its technology focus |
| About | about.html | Explains the business concept and provides an illustrative Pretoria map |
| Services | service.html | Displays searchable and sortable technology services |
| Gallery | gallery.html | Displays technology photographs with a lightbox |
| Enquiry | enquiry.html | Provides project enquiry details and service guidance |
| Contact | contact.html | Provides a general message form and contact information |

All pages are connected through the website navigation menu.

---

## 4. Part 1 Feedback and Part 2 Improvements

This section is based on the previous project documentation, not a newly verified lecturer marking sheet.

### 4.1 HTML Structure

The original website used HTML to structure the main pages.

I improved the organisation of the website using semantic HTML elements such as:

- header
- nav
- main
- section
- article
- footer

These elements make the website easier to organise and maintain.

### 4.2 External CSS

The website uses an external stylesheet located at:

`css/style.css`

This separates the design from the HTML content.

The stylesheet controls colours, spacing, typography, navigation, buttons, cards and responsive layouts.

### 4.3 Layout Improvements

The layout was improved using CSS Grid and Flexbox.

These techniques help arrange website elements more consistently on different screen sizes.

### 4.4 Responsive Design

The current stylesheet includes media queries at approximately:

- 930px for smaller layouts.
- 690px for mobile layouts.

The website also uses flexible containers and responsive images.

### 4.5 Typography and Colour

The design uses a navy, teal and light background colour scheme.

Text sizes, spacing and headings were adjusted to improve readability.

### 4.6 Navigation Improvements

The original navigation was improved by introducing a mobile menu controlled through JavaScript.

The menu allows visitors to access the website pages more easily on small devices.

### 4.7 Images

Responsive images and descriptive alternative text were used to improve the presentation and accessibility of website photographs.

Image permissions must be confirmed before commercial use.

### 4.8 Project Documentation

The README was expanded to include the project overview, development history, JavaScript features, testing, deployment information and references.

---

## 5. Technologies Used

### 5.1 HTML5

HTML5 was used to organise the website content.

It provides the structure for navigation, headings, images, forms and other page elements.

Semantic HTML supports accessibility and improves the organisation of content (MDN Web Docs, s.a.-c).

### 5.2 CSS3

CSS was used to improve the appearance of the website.

The external stylesheet includes:

- Colours and backgrounds.
- Navigation styling.
- Typography.
- Buttons and cards.
- CSS Grid and Flexbox.
- Responsive media queries.
- Hover and focus effects.

CSS makes it easier to apply consistent styling across multiple pages (MDN Web Docs, s.a.-b).

### 5.3 JavaScript

JavaScript was used to add interactive functionality.

The website demonstrates:

- Variables and arrays.
- Functions.
- Conditional statements.
- Event listeners.
- DOM manipulation.
- Dynamic content.
- Form validation.
- AJAX requests.

These techniques allow the website to respond to user actions (MDN Web Docs, s.a.-d).

### 5.4 Leaflet and OpenStreetMap

Leaflet was used to create an interactive Pretoria map.

OpenStreetMap provides geographical map information.

The map illustrates Pretoria city centre rather than a confirmed business address (Leaflet, s.a.; OpenStreetMap contributors, s.a.).

### 5.5 Git and GitHub

Git was used for version control and recording website changes.

GitHub stores the source code and development history.

The website files are maintained on the master branch.

### 5.6 GitHub Pages

GitHub Pages is used to publish the static website.

The service supports HTML, CSS and browser JavaScript files (GitHub, 2026).

### 5.7 Netlify

Netlify was used for an earlier deployment attempt.

The project includes forms originally designed to work with Netlify Forms.

Real message submission through GitHub Pages requires a separate compatible form-processing service.

---

## 6. JavaScript Functionality

### 6.1 Mobile Navigation

A JavaScript-controlled mobile navigation menu was implemented.

When visitors click the menu button, JavaScript opens or closes the navigation.

The script uses `addEventListener()` and `classList.toggle()`.

It also updates the `aria-expanded` attribute to improve accessibility.

### 6.2 Dynamic Services

The Services page uses JavaScript to display service information dynamically.

The service data is stored in an array.

The website contains four main service areas:

1. Banking and FinTech Software
2. Business Process Automation
3. Cloud Integration and Migration
4. Quality Assurance and Security Reviews

JavaScript creates cards containing service names, descriptions and enquiry links.

### 6.3 Service Searching

Visitors can search for a service using keywords.

JavaScript checks the entered text against the service names and descriptions.

Only matching services are displayed.

### 6.4 Service Filtering

Visitors can filter services according to their category.

This makes it easier to explore specific technology areas.

### 6.5 Service Sorting

The Services page allows visitors to sort the results alphabetically.

JavaScript updates the displayed cards without reloading the page.

### 6.6 Interactive Gallery

The Gallery page includes a JavaScript lightbox.

Visitors can click a technology photograph to display a larger version.

The enlarged image appears with a description and can be closed using the provided button.

The photographs are illustrative and do not represent completed customer projects.

### 6.7 Interactive Map

The About page includes a map developed using Leaflet and OpenStreetMap.

The map focuses on the Pretoria city-centre area.

Visitors can zoom and explore the location.

The map is illustrative and does not represent a verified Apex Logic Systems office address.

The map uses online tile services, so the published website must be tested to confirm that the tiles are available.

### 6.8 Project Enquiry Guidance

The Enquiry page allows visitors to select a technology service.

JavaScript displays additional guidance based on the selected service.

Visitors can also enter an estimated budget and describe their project requirements.

The guidance is informational and does not provide a confirmed quotation.

---

## 7. JavaScript Form Validation

The Contact and Enquiry pages use JavaScript validation techniques covered in the WEDE5020 learning material (The IIE, 2026).

### 7.1 Required Field Validation

JavaScript checks whether required fields contain information.

If a required field is empty, an error message is displayed.

### 7.2 Email Validation

The forms check whether an entered email address follows a valid format.

### 7.3 Input Length Validation

Text fields are checked against their minimum and maximum length requirements.

### 7.4 Checkbox Validation

Visitors must select the required consent checkbox.

### 7.5 Error Messages

JavaScript displays error messages near fields containing incorrect information.

Visitors can correct the information before submitting.

### 7.6 JavaScript Techniques

The validation script uses:

- addEventListener()
- value.trim()
- checkValidity()
- if and else statements
- isValid
- showError()
- clearError()
- event.preventDefault()

These techniques demonstrate the concepts covered in the JavaScript Form Validation lessons.

### 7.7 AJAX Form Handling

The website includes asynchronous form-handling code using `fetch()`.

This was originally designed for Netlify Forms.

GitHub Pages supports the website's client-side validation, but it does not independently deliver form submissions to Netlify.

The website must therefore use a compatible external form service if actual customer message delivery is required.

Local validation does not prove that a message has been delivered.

---

## 8. Responsive Design and Accessibility

The website uses an external CSS stylesheet to support different screen sizes.

Responsive design techniques include:

- Flexible layouts.
- CSS Grid and Flexbox.
- Responsive images.
- Media queries.
- Mobile navigation.
- Adjusted spacing and typography.

Accessibility improvements include descriptive image alternative text, labelled form fields, visible focus indicators and semantic HTML.

The website should be tested on desktop, tablet and mobile devices.

---

## 9. Search Engine Optimisation

Search engine optimisation was included to help search engines discover and understand the website.

### 9.1 Page Titles

Each page contains a title describing its content.

### 9.2 Meta Descriptions

Meta descriptions summarise the purpose of the individual pages.

### 9.3 Keywords

Relevant technology-related keywords are included in the website metadata and content.

### 9.4 Headings

The website uses headings to organise information into sections.

### 9.5 Internal Links

Navigation links connect the six main pages.

### 9.6 Image Alternative Text

Images contain descriptions that help explain their content.

### 9.7 Responsive Design

The website uses responsive CSS to improve usability on mobile devices.

### 9.8 Robots.txt

The robots.txt file contains crawler instructions and a link to the sitemap.

### 9.9 Sitemap.xml

The sitemap lists the six main pages using their GitHub Pages URLs.

The sitemap must be tested after deployment to confirm that its links open correctly.

The project-level robots.txt file does not control the entire shared github.io domain.

These techniques follow general guidance from Google Search Central (s.a.).

SEO does not guarantee a specific search engine ranking.

---

## 10. Development Changelog

The following table summarises the website development.

| Version / Period | File or Feature | Changes |
|---|---|---|
| v1.0 | HTML | Created the original website pages |
| v1.1 | External CSS | Linked the shared stylesheet |
| v1.2 | Typography | Improved colours, fonts and spacing |
| v1.3 | Layout | Improved the hero section and content presentation |
| v1.4 | Responsive design | Added responsive breakpoints |
| v1.5 | Forms and images | Improved form styling and responsive photographs |
| v2.0 | Navigation | Added interactive mobile navigation |
| v2.1 | Services | Added dynamic service cards, search, filtering and sorting |
| v2.2 | Gallery | Added interactive image lightbox |
| v2.3 | About | Added interactive Pretoria map |
| v2.4 | Enquiry | Added project enquiry guidance |
| v2.5 | Forms | Added JavaScript validation and AJAX handling |
| v2.6 | SEO | Added and improved metadata, robots.txt and sitemap.xml |
| 29 October 2026 | README | Updated website links, deployment guidance and testing documentation |
| 29 October 2026 | SEO review | Prepared complete robots.txt and sitemap.xml for GitHub Pages |

These are development summaries. Actual Git commits and their dates should be checked in the GitHub repository.

---

## 11. Project File Structure

The main website files are organised as follows:

    Apex_Logic_Systems/
    |
    |-- index.html
    |-- about.html
    |-- service.html
    |-- gallery.html
    |-- enquiry.html
    |-- contact.html
    |
    |-- css/
    |   |-- style.css
    |
    |-- js/
    |   |-- script.js
    |
    |-- images/
    |
    |-- robots.txt
    |-- sitemap.xml
    |-- README.md

The website uses relative paths to connect HTML, CSS, JavaScript and images.

Folder and filename capitalisation must match the code exactly.

---

## 12. Website Testing Checklist

The following features must be checked before final submission:

- [ ] Homepage opens correctly.
- [ ] All six pages open.
- [ ] Navigation links work.
- [ ] Mobile navigation works.
- [ ] Homepage photograph displays.
- [ ] Gallery photographs display.
- [ ] Gallery lightbox opens and closes.
- [ ] Services search works.
- [ ] Service filtering works.
- [ ] Service sorting works.
- [ ] Interactive Pretoria map loads.
- [ ] Contact form validation works.
- [ ] Enquiry form validation works.
- [ ] Project enquiry guidance updates.
- [ ] Actual message delivery is tested if required.
- [ ] robots.txt contains the sitemap reference.
- [ ] sitemap.xml opens without XML errors.
- [ ] GitHub Pages deployment succeeds.
- [ ] All published website links work.
- [ ] The website displays correctly on mobile.
- [ ] Business information and image permissions are verified.

Checklist items should only be marked complete after successful testing.

---

## 13. Website Deployment

### 13.1 GitHub Repository

The project source files are stored at:

https://github.com/seipatichirwa568-star/Mokhine_ST10477871_WEDE5020_POE_P2

The lecturer can access the website source files by selecting the master branch.

### 13.2 GitHub Pages Website

The expected public website address is:

https://seipatichirwa568-star.github.io/Mokhine_ST10477871_WEDE5020_POE_P2/

This link must be verified through GitHub Pages after deployment.

### 13.3 Previous Netlify Website

The earlier Netlify address is:

https://apexlogic-st10477871.netlify.app/

The Netlify deployment experienced a hosting limitation, so GitHub Pages is being used for the final static website.

### 13.4 GitHub Pages Publishing Process

The following process is used to publish the website:

1. Open the GitHub repository.
2. Select Settings.
3. Select Pages.
4. Choose Deploy from a branch.
5. Select the master branch.
6. Select /(root).
7. Click Save.
8. Open GitHub Actions.
9. Confirm the deployment is successful.
10. Use Visit site to open the published website.
11. Test the navigation, images, JavaScript and sitemap.

### 13.5 Hosting Limitations

GitHub Pages supports static HTML, CSS and client-side JavaScript.

The website does not include a live banking backend or database.

The original Netlify Forms submission code does not automatically deliver messages when the site is hosted on GitHub Pages.

Actual form delivery requires a compatible service.

### 13.6 Final Website Links

**Repository:**  
https://github.com/seipatichirwa568-star/Mokhine_ST10477871_WEDE5020_POE_P2

**Expected Published Website:**  
https://seipatichirwa568-star.github.io/Mokhine_ST10477871_WEDE5020_POE_P2/

**Sitemap:**  
https://seipatichirwa568-star.github.io/Mokhine_ST10477871_WEDE5020_POE_P2/sitemap.xml

---

## 14. Limitations and Future Improvements

Apex Logic Systems is a student technology business concept.

The current website does not provide:

- A working banking backend.
- Online payments.
- A live customer database.
- Confirmed customer projects.
- Verified business certifications.
- A confirmed physical office address.

The technology images are illustrative.

Business contact details, project claims and image permissions must be verified before commercial use.

Possible future improvements include a customer portal, project tracking, secure backend services and live customer enquiry processing.

---

## 15. Conclusion

Part 3 builds on the HTML and CSS work completed during Parts 1 and 2.

The website now includes interactive JavaScript elements, dynamic service listings, search and sorting, gallery lightbox functionality, project enquiry guidance, form validation and an interactive map.

The project also includes updated search engine optimisation and GitHub Pages deployment documentation.

The main goal was to make Apex Logic Systems easier to navigate while demonstrating the web-development techniques covered in WEDE5020.

The final step is to confirm that all features work on the published website before submitting the repository and live links.

---

## 16. References

Duckett, J., 2011. *HTML and CSS: Design and build websites*. Indianapolis: John Wiley & Sons.

GitHub, 2026. *Creating a GitHub Pages site*. [Online]. Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site [Accessed 29 October 2026].

Google Search Central, s.a. *SEO starter guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 29 October 2026].

Leaflet, s.a. *Leaflet quick start guide*. [Online]. Available at: https://leafletjs.com/examples/quick-start/ [Accessed 29 October 2026].

MDN Web Docs, s.a.-a. *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 29 October 2026].

MDN Web Docs, s.a.-b. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 29 October 2026].

MDN Web Docs, s.a.-c. *HTML: HyperText Markup Language*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 29 October 2026].

MDN Web Docs, s.a.-d. *JavaScript*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 29 October 2026].

Netlify, s.a. *Forms setup*. [Online]. Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 29 October 2026].

OpenStreetMap contributors, s.a. *OpenStreetMap*. [Online]. Available at: https://www.openstreetmap.org/ [Accessed 29 October 2026].

The Independent Institute of Education (The IIE), 2026. *WEDE5020: JavaScript form validation*. [Lecture slides]. Rosebank College.

The Independent Institute of Education (The IIE), 2025. *The IIE Harvard-Anglia style reference guide*. [Online]. Available at: https://iielibraryconnect.iie.ac.za/e-shelf/referencing-and-plagiarism [Accessed 29 October 2026].
