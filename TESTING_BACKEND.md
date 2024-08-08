# TC Carpentry API Testing

## Testing Overview

During and post development of this project numerous testing was carried out by myself.

## Contents

- [TC Carpentry API Testing](#tc-carpentry-api-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
  - [Validators](#validators)
    - [CI Python Linter](#ci-python-linter)
  - [Bugs and Fixes](#bugs-and-fixes)

  ## Manual Testing

Manual testing was carried out throughout the project, making sure the site was functioning correctly.

Full test table:

| Feature | Expected Outcome| Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
| Admin login | When accessing the admin page, the login form appears and when filled out correctly I can then access the admin pages. | Tried logging in with and without the correct admin details. | Unable to sign in with wrong admin details adn was able to sign in with the correct details. | Pass |
| Admin add photo | When logged in as admin, I am able to upload images. | Logged in as admin, filled out the add image form correctly. | Was succesffully able to add an image. | Pass |
| Delete image | When logged in as admin, I am able to delete images. | Logged in as admin, then selected numerous images and clicked delete. | The images were deleted. | Pass |
| Uable to add an image to large | When logged in as admin, I am unable to add an image which file is to large. | Logged in as admin and tried loading and image that was to large. | Image was not uploaded and an error message was on display informing me the file was to large. | Pass |
| Uable to add an image to high | When logged in as admin, I am unable to add an image which dimensions are to high. | Logged in as admin and tried loading and image that was to high. | Image was not uploaded and an error message was on display informing me the image dimensions were to high. | Pass |
| Uable to add an image to wide | When logged in as admin, I am unable to add an image which dimensions are to wide. | Logged in as admin and tried loading and image that was to wide. | Image was not uploaded and an error message was on display informing me the image dimensions were to wide. | Pass |
| Uable to add an image with wrong file enxtension | When logged in as admin, I am unable to add an image which has the wrong file extensions. | Logged in as admin and tried loading and image with the wrong extension. | Image was not uploaded and an error message was on display informing me the image has invalid extension. | Pass |
| Retrieve list of images | When going to the correct url, I am able to retrieve and see the list of images. | Went to the correct url. | List of all images are on display. | Pass |
| Main page or portfolio page must be selected | When logged in as admin and uploading an image, admin must select the image for main page or portoflio page or both, atleast one of these fields must be selected. | Logged in as admin, tried uploading images without selecting either main page or portfolio page. | I was unable to upload image unless main page or portfolio page was selected. | Pass |
| Search for images by description | When logged in as admin, I am able to search for images description. | Logged in as admin, then tried searching for images by their descriptions. | Succesffully able to search and find images by their descriptions. | Pass |
| Search for images by work type | When logged in as admin, I am able to search for images work type. | Logged in as admin, then tried searching for images by their work type. | Succesffully able to search and find images by their work type. | Pass |
| Filter by work type | When logged in as admin, I am able to filter images by work type. | Logged in as admin, then tried filtering images by their work type. | Succesffully able to filter images by their work type. | Pass |
| Filter by main page | When logged in as admin, I am able to filter images by if they are main page. | Logged in as admin, then tried filtering images by main page. | Succesffully able to filter images by main page. | Pass |
| Filter by portfolio page | When logged in as admin, I am able to filter images by if they are portfolio page. | Logged in as admin, then tried filtering images by portfolio page. | Succesffully able to filter images by portfolio page. | Pass |
| Description length | When uploading a photo I am not allowed to exceed 50 characters. If this happens, image is not uploaded and error message appears. | Logged in as admin, tried uploading image with description field exceeding 50 characters. | Unable to upload image, error message appeared. | Pass |

