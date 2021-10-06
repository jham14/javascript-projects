// Build a tip calculator.
// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping.

//Calculate Tip
function calculateTip() {

  let billAmount = document.getElementById("billamt").value;
  const serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleamt").value;

  //valid input
  if (billAmount === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.querySelector(".perperson").style.display = "none";
  } else {
    document.querySelector(".perperson").style.display = "flex";
  }

  //Calculate tip
  let total = (billAmount * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;

  //toFixed() - two digits after decimal point
  total = total.toFixed(2);
  let tipTotal = total * numOfPeople
  let tipAndBill = billAmount + tipTotal


  //Display tip totals on click
  document.getElementById("tipEach").style.display = "";
  document.getElementById("tipTotal").style.display = "";
  document.getElementById("billPlusTip").style.display = "";
  //totals innerHTML
  document.getElementById("tip").innerHTML = total;
  document.querySelector(".tipTotal").innerHTML = tipTotal.toFixed(2);
  document.querySelector(".tipAndBill").innerHTML = tipAndBill;

}

//Hide tip totals on load
document.getElementById("tipEach").style.display = "none";
document.getElementById("tipTotal").style.display = "none";
document.getElementById("billPlusTip").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
