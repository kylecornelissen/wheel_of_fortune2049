// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/WOD-logo.svg';
import './images/icon.png';
import './images/star.svg';

console.log('This is the JavaScript entry file - your code begins here.');
console.log('hello');

const app = document.querySelector('.winners-page')

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) {
    r = Math.random() * 100
  }
  return r
}

for (let i = 0; i < 50; i++) {
  const delay = Math.random() + 's';
  const el = document.createElement('img')
  el.src            = './images/star.svg'
  el.className      = 'glitter-star'
  el.style.top      = myRand() + '%'
  el.style.left     = myRand() + '%'
  el.style.animationDelay       = delay
  el.style.msAnimationDelay     = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay    = delay
  app.appendChild(el)
}
