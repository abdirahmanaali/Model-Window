'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// looping over each show modal button
// for (let i = 0; i < btnsOpenModal.length; i++)
//   // at each current stage we listen for a click and remove the hidden class
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     // we just pass the class name. DO NOT USE .
//     // we can select more classes by separating the comma
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// This hides the modal once we click the X button
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// This hides once we click outside the modal
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// created a function to open the modal and can reuse it any where
// const OpenModal = function () {
//   // console.log('Button clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// created a function to close the modal and can reuse it any where
// const CloseModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', OpenModal);

// This hides the modal once we click the X button
// btnCloseModal.addEventListener('click', CloseModal);

// // This hides once we click outside the modal
// overlay.addEventListener('click', CloseModal);

// Retrying by myself

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = document.querySelector('.close-modal');

console.log(btnsOpenModal);

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hidingModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

closeModal.addEventListener('click', hidingModal);

overlay.addEventListener('click', hidingModal);

// How to respond to keyboard events.

// KEYBOARD EVENTS - are global events because they do not happen one one specific element and that's why we listen the whole document.
// For keyboard event there are three types
// KEY UP - happens when we lift our finger of the keyboard
// KEY DOWN - is fired as soon as we just press down the key
// KEY PRESS - is fired countinously as we keep our finger on a certain key
document.addEventListener('keydown', function (e) {
  // gives me the the keyboardevent object. i'm looking for the key value to access what was pressed
  // console.log(e);

  // if esc key is pressed & modal doesn't contain the classname hidden then hide it/ close it
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // invoke the function that closes the modal
    hidingModal();
  }
});
