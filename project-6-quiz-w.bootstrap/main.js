// Build a three-question quiz.
// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong (give them the correct answer).


const correctAnswers = ['B', 'B', 'D'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correctPrompt = document.querySelectorAll('.correct-answer');
const incorrectPrompt = document.querySelectorAll('.incorrect-answer');
const rank = document.querySelectorAll('span');
const marks = document.querySelectorAll('.marks');

//on Submit
form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

  // check userAnswers
  userAnswers.forEach((answer, index) => {

    if(answer === correctAnswers[index]){
      score += 1;
      correctPrompt[index].classList.remove('d-none')
    } else {incorrectPrompt[index].classList.remove('d-none')};
  });

  //scroll up & show result:
  window.scrollTo(0,0);

  result.classList.remove('d-none');

  if(score == 0){
    rank[0].classList.remove('d-none')
    marks[0].classList.remove('d-none')
  }else if(score == 1){
    rank[1].classList.remove('d-none')
    marks[1].classList.remove('d-none')
  }else if(score == 2){
    rank[2].classList.remove('d-none')
    marks[2].classList.remove('d-none')
  }else if(score == 3){
    rank[3].classList.remove('d-none')
    marks[3].classList.remove('d-none')
  }


});

//disable submit button after submit event
function disableSubmit() {
  let refresh = document.querySelector('.refresh');
  refresh.classList.remove('d-none');
  let e = document.querySelector('.form-button');
  setTimeout(function(){e.disabled=true;},0);
  return true;
}


//for %age score:
// let output = 0;
// const timer = setInterval(() => {
//   result.querySelector('span').textContent = `${output}`;
//   if(output === score){
//     clearInterval(timer);
//   } else {
//     output++;
//   }
// }, 10)


// // setInterval() - fires until i=5 then clearInterval fires:
// let i = 0
// const timer = setInterval(() => {
//   console.log('hey');
//   i++;
//   if(i === 5){
//     clearInterval(timer);
//   }
// }, 500);


//setTimeout() - fires after time specified after function argument:
// setTimeout(() => {
//   alert('hello!')
// },3000)
