# TC Carpentry React Testing

## Testing Overview

During the development of this project, numerous testing was carried out by myself and others.

## Contents

- [TC Carpentry React Testing](#tc-carpentry-react-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Validators](#validators)
    - [Lighthouse](#lighthouse)
    - [ESLint JavaScript](#eslint-javascript)
    - [W3C CSS Validator](#w3c-css-validator)
  - [Responsiveness](#responsiveness)
  - [Bugs & Fixes](#bugs-&-fixes)

## Manual Testing

Manual testing was carried out throughout the project, making sure user stories were working successfully and the site was functioning correctly.

Full test table:

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
|`Homepage`|
| When user first loads site. | When the page first loads, the with a clear homepage displaying all information about TC Carpentry, photos, navbar, contact form. | Loaded the homepage. | Homepage loads and I am presented with a clear homepage displaying all different information on TC Carpentry and contact form. | Pass |
| Slideshow | When home page loads, the user is presented with a slideshow which automatcally displays different images of TC Carpentrys work. | Loaded the homepage. | Homepage loads and I am presented with a slideshow of different images of work done by TC Carpentry. | Pass |
| Contact us buttons re-direct to correct page. | When a user clicks on the contact us button in the info section, the user should be re-directed to the contact us page. | Clicked on both contact us buttons numerous times. | Each time I was re-directed to the contact us page. |
|`Navbar`|
| Check user can navigate using navbar. | If the user is on any page on the site, the user is able to click on any link on the navbar and re-directed to the correct page. | Whilst on the site, I tried navigating from page to page clicking on all the different links. | Each time I clicked on a navbar link, I was re-directed to the correct page. | Pass |
| Hamburger menu. | When on a mobile device the navbar should now be a drop down hamburger menu. | Loaded the site on several mobile devices. | Each time the navbar was in the form of the hamburger menu. | Pass |
| Active link. | When user is on a certain page, the nav link for that page will be a different colour to show user that they are on that page. | Went to all the pages on the site. | Each nav link when on that respected page, the nav link was a different colour. | Pass |
| Hover over link. | When user hovers over a nav link, the nav link will change colour to show user that they are hovering over that link. | Hovered over all nav links. | Each nav link when hovered over, their respected nav link changed colour. | Pass |
| Main logo link to homepage. | If the user clicks on the main logo for the site, they are re-directed back to the homepage. | Clicked on the main logo from different pages on the site. | Each time I was navigated back to the homepage. | Pass | 
|`Footer`|
| Footer is present on every page. | If the user is on any page on the site, the footer will be present at the bottom of the page. | Visited every page on the site. | On every page the footer was present in the correct place. | Pass |
| Footer links work correctly. | When a user clicks on the footer links, the link is opened up in a new tab and to the correct destination. | Clicked on the different footer links numerous times. | Each time the link opened up in a new tab and was to the correct destination. | Pass |
|`Contact form`|
| Contact form is present on every page. | The contact form must be clearly displayed on every page and user is able to fill this out. | Visited every page on the site and attempted to fill out form. | Contact form was on every page and was able to fill in the fields. | Pass |
| Send when filled out correctly. | If the user fills out the form correctly, they are able to send an email to TC Carpentry with the enquiry. Alert message will also appear informing the user that it has been sent. | Filled out the contact form correctly. | Each time I filled out the form correctly, I successfully sent and email to TC Carpentry and an alert message appeared saying I was successfull. | Pass |
| Form won't send if incorrect. | If the contact form is not filled out correctly, the form will not be sent and error messages under each field that is incorrect will be displayed. An alert message will also be displayed to inform the user they were unsuccessful and to check the contact form. | Filled out the form incorrectly numerous times with different errors. | Each time the input field that had an error, had an error message underneath explaining the error. An alert message was also on the screen informing me that the form was unsuccessful. | Pass |
| Send button disabled and loading icon. | When the user had filled out the form correctly and pressed send, the send button will now be disabled to prevent multiple submits and the button will inform the form is sending and displays a loading icon. | Filled out the form correctly and pressed send. | Each time the send button was disabled, it informed me it was sending and the loading icon was present. | Pass |
|`Services page`|
| Service page loads and tabs on display. | When the user visits the service page, the service page loads displaying the services provided by TC Carpentry and there is a list of tabs to see the different options and information. | Visited the services page. | The services page displayed all the services by TC Carpentry and there was a list of tabs with different options and information. | Pass |
| Tabs contain correct images and information. | When the user clicks on a certain tab, the information in the tab should be the correct information and images for the tab. | Clicked on all the different tabs. | In each tab, the correct images and information was on display for that tab. | Pass |
| Active tab. | The active tab will be a different colour so the user can see which tab they are on. | Clicked on all the different tabs. | Each tab I clicked on, the acitve tab was a different colour. | Pass |
| Hover over tab. | When user hovers over a tab, the tab will change colour to show user that they are hovering over that tab. | Hovered over all tabs. | Each tab when hovered over changed colour. | Pass |
|`Portfolio page`|
| Portfolio page loads and tabs on display. | When the user visits the portfolio page, the portfolio page loads displaying the images of work provided by TC Carpentry and there is a list of tabs to see the different options. | Visited the portfolio page. | The portfolio page displayed all the images of work by TC Carpentry and there was a list of tabs with different options. | Pass |
| Tabs contain correct images. | When the user clicks on a certain tab, the images in the tab should be the correct images for that tab. | Clicked on all the different tabs. | In each tab, the correct images was on display for that tab. | Pass |
| Active tab. | The active tab will be a different colour so the user can see which tab they are on. | Clicked on all the different tabs. | Each tab I clicked on, the acitve tab was a different colour. | Pass |
| Hover over tab. | When user hovers over a tab, the tab will change colour to show user that they are hovering over that tab. | Hovered over all tabs. | Each tab when hovered over changed colour. | Pass |
|`About us page`|
| About us page loads. | When the user visits the about us page, they can clearly see information about TC Carpentry. | Visited the about us page. | I could clearly see information explaining about TC Carpentry. | Pass |
|`Contact us page`|
| Contact us page loads. | When the user visits the contact us page, they can clearly see information about how to contact TC Carpentry. | Visited the about us page. | I could clearly see information explaining how to contact TC Carpentry. | Pass |

[back to top](#tc-carpentry-react-testing)
