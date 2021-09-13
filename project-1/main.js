// Project 1: Build a simple counter.
// -Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
// -Pressing the plus button increases the count by 1, pressing the minus button decreases by 1

let add = document.getElementById('increment');
let subtract = document.getElementById('decrement');
let counter = document.getElementById('counter');

let integer = 0;

add.addEventListener('click', () => {
  integer += 1;
  counter.innerHTML = integer;
});

subtract.addEventListener('click', () => {
  integer -= 1;
  counter.innerHTML = integer;
});

//1: store plus, minus buttons and counter number in the variables add, subtract and counter
//2: store a value of 0 in integer variable - count will begin at 0
//3: addEventListener()'s to add and subtract buttons that listen for a 'click' from the users
//4: function that increases integer variable by 1 upon click event - counter's HTML text is made equal to integer value upon a click


//daft hand anime:
let still = document.querySelector('.still');
let img = document.querySelector('.img');
let sad = document.querySelector('.sad');

add.addEventListener('click', () => {
  if(integer >= 1) {
  still.style.visibility = 'visible'
  img.style.visibility = 'visible'
  sad.style.visibility = 'visible'
  }
});

subtract.addEventListener('click', () => {
  if(integer <= 0){
    still.style.visibility = 'hidden'
    img.style.visibility = 'hidden'
    sad.style.visibility = 'hidden'
  }
});
