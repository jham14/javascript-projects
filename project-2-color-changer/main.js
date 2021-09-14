// Project 2: Build a background color switcher.
// -Create an HTML select dropdown with at least 5 color options in it
// -use the "onchange" attribute so that every time a user selects a color using the dropdown, it calls your JavaScript function that changes the background color of the BODY to the color selected in the dropdown



function colorChange() {
  let x = document.getElementById("colors").value;
  document.body.style.background = x
}

//1: onchange attribute in HTML <select> element stores the colorChange function
//2: variable 'x' stores the value attribute of <select> when passed from the chosen <option>
//3: body background is set equal to value attribute
