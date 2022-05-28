# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size (mobile and desktop versions)
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://github.com/TomasScerbak/tip-calculator-app.git](https://your-solution-url.com)
- Live Site URL: [https://tomasscerbak.github.io/tip-calculator-app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

Major takeaway was how to extract value from input and updating this value in global variable. Also learned how to use arrow syntax and also take advantage of helper fucntions.

To see how you can add code snippets, see below:

```js

// Getting value from bill input
let inputValue = 0;


bill.addEventListener('input', (e) => {

    // Getting input value and converting to number
    value = Number(e.target.value);
    inputValue = value
    console.log(value);

})

fiftyPercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 50).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

// Helper function to reset all elements
let reset = function() {
    bill.value = 0;
    customBtn.value = '';
    peopleCountInput.value = 0;
    tipPerPerson.innerHTML = '0.00';
    totalPerPerson.innerHTML = '0.00';
}

resetBtn.addEventListener('click', reset);
}
```

## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
