
//Project 3: Build a number-guessing game

let randomNum = Math.floor(Math.random() * 100 + 1);
let attempts = 0;
let max = 2;
let quit = 0;
let quit2 = 0;
console.log('Answer: ' + randomNum);

document.getElementById("submitGuess").onclick =
function gameFunction () {
let guess = document.getElementById("guessField").value;

while(attempts != randomNum){
  if(quit == 1){
    alert(`You already won! Hit refresh to go again...`);
  }
  else if(quit2 == 1){
     alert(`You lost! Hit refresh to go again...`);
   }
  else if(guess == randomNum){
    attempts += 1;
    alert("Congratulations! You guessed it! It took you " + attempts + " attempt(s).");
    alert(`Brucie says:  "Didn't they do well?"`)
    alert("Hit refresh to go again.");
    console.log('attempts: ' + attempts);
    quit += 1;
    break
  }
  else if(attempts >= max){
    alert(`Brucie says:  "What a shame!"`);
    alert(`The correct number was ` + randomNum);
    alert('Game Over! Hit refresh to go again');
    attempts += 1;
    console.log('attempts: ' + attempts);
    quit2 += 1;
    break
  }
  else if(attempts == 1 && guess > randomNum){
    alert(`Brucie says:  "Lower!"`);
    alert(`Brucie says:  "This is your Last Attempt! Take your time now..."`);
    attempts += 1;
    console.log('attempts: ' + attempts);
    break
  }
  else if(attempts == 1 && guess < randomNum){
    alert(`Brucie says:  "Higher!"`);
    alert(`Brucie says:  "This is your Last Attempt! Take your time now..."`);
    attempts += 1;
    console.log('attempts: ' + attempts);
    break
  }
    else if(guess > randomNum){
      alert(`Brucie says:  "Lower!"`);
      attempts += 1;
      console.log('attempts: ' + attempts);
      break
    }
    else if(guess < randomNum){
      alert(`Brucie says:  "Higher!"`);
      attempts += 1;
      console.log('attempts: ' + attempts);
      break
    }
      else {alert('ERROR! This is a numbers game.')}
      break
  };
}
