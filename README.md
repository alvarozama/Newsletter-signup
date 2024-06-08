# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./screenshots/desktop.png)
![Desktop Active](./screenshots/desktop-active.png)
![Desktop Error](./screenshots/desktop-error.png)
![Desktop Success](./screenshots/desktop-success.png)
![Desktop Success Acive](./screenshots/desktop-succes-active.png)
![Mobile](./screenshots/mobile.png)
![Mobile Active](./screenshots/mobile-active.png)
![Mobile Error](./screenshots/mobile-error.png)
![Mobile Success](./screenshots/mobile-success.png)

### Links

- Solution URL: [https://github.com/alvarozama/Newsletter-signup]
- Live Site URL: [https://alvarozama.github.io/Newsletter-signup/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

As was the challenge's goal, I can say I learned some really important aspects of form validation. Up until now I had managed forms mainly through HTMLs built-in validation functionality. This time around, however, I learned how to use Javascript to both retrieve form data from the inputs and build functions that use that data to verify f it's valid according to more customized criteria. Good stuff all around. 

### Continued development

The thing I disliked the most about my solution and that I guess requires more work is the mobile design of the page. I wasn't able to get rid of an annoying white edge on the top of the page and the positioning of the arror message was less than optimal.

### Useful resources

- [https://regexr.com/3e48o] - This quite simply helped me find a regex expession that would thoroughly evaluate the validity of the email address without having to crack my head open.
- [https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/] - This article on freeCodeCamp (referenced by FrontendMentor) was helpul in undestanding how to retrieve and work with data from a form. 

## Author

- Frontend Mentor - [@alvarozama](https://www.frontendmentor.io/profile/alvarozama)

