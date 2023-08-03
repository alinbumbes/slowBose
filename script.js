'use strict';
//select svg element
const svgElem = document.querySelector('.svg-bg-colors');

//set css variable for svg element to be the largest of the two dimensions
const setPropForSvg = () =>
    window.innerHeight * 2 <= window.innerWidth
        ? svgElem.style.setProperty('--width-or-height-largest', window.innerWidth + 'px')
        : svgElem.style.setProperty('--width-or-height-largest', window.innerHeight * 2 + 'px');

window.addEventListener('resize', setPropForSvg);
setPropForSvg();