/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості KeyboardEvent.key та KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
 window.addEventListener('keypress', onKeypress)

 function onKeypress(event){
  // console.log(event);
  console.log('event.code: ', event.code);
  console.log('event.key: ', event.key);

  refs.output.textContent += event.code;

 }