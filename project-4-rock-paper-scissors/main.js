//Project 4: Build a rock, paper, scissors game.

const hands = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const halScoreSpan = document.querySelector('[data-hal-score]');
const playerScoreSpan = document.querySelector('[data-player-score]');
const SELECTIONS = [
  {
    name: 'rock',
    icon: '👊',
    defeats: 'scissors'
  },
  {
    name: 'paper',
    icon: '✋',
    defeats: 'rock'
  },
  {
    name: 'scissors',
    icon: '✌',
    defeats: 'paper'
  }
];

hands.forEach(hand => {
  hand.addEventListener('click', e => {
    const handName = hand.dataset.selection;
    const playerSelection = SELECTIONS.find(selection => selection.name === handName);
    chooseHand(playerSelection)
  })
});

function chooseHand(selection){
  const halsSelection = randomSelect();
  const playerWinner = isWinner(selection, halsSelection);
  const halWinner = isWinner(halsSelection, selection);

  if (halWinner)increment(halScoreSpan);
  if (playerWinner)increment(playerScoreSpan);

  addResult(halsSelection, halWinner);
  addResult(selection, playerWinner);
};

  function randomSelect() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
  }

  function isWinner(selection, opponentSelection) {
    return selection.defeats === opponentSelection.name;
  }

  function increment(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1;
  }

  function addResult (selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.icon;
    div.classList.add('result');
    if(winner) div.classList.add('winner');
    finalColumn.after(div)
  }

        //click event
//1. Each button element in index.html is given a 'click' addEventListener() via forEach() method
//2. the variable handName stores the data-selection value of the three button elements
//3. the name property of each object in the SELECTIONS global array is made equal to data-selection value in index.html - javascript is now connected to html buttons - this is stored in the playerSelection variable
//4. finally, chooseHand function is executed - with playerSelection as argument

        //chooseHand function
//5. halsSelection in chooseHand stores a random number between 0 - 2 via the randomSelect function - each number is an index of the SELECTIONS array - this will be the computer's selection upon each click event
//6. playerWinner and halWinner store the isWinner function - each with opposite arguments - isWinner returns a boolean based on whether the player/computer's object defeats property matches the opponent's name property
//7. two if statements check if playerWinner and halWinner are true - if true, increment function is executed with the respective score taken as an argument.
//8. finally, the addResult function is called twice to add the respective emojis to the tally - a new div element is created for both tallies, the element will cotain the chosen object's icon/emoji - the emojis are given the .result CSS style - an if statement checks if the passed winner argument is true, taken from the isWinner boolean - if true, the .winner CSS style is added to make the emoji full size/opacity
