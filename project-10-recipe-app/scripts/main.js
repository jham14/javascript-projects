// -When the page first loads, it should display a random recipe, complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients.
// -When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.
const title = document.querySelector('.title');
const youtube = document.querySelector('.video');
const method = document.querySelector('.method-text');
const image = document.querySelector('img');
const ingredsList = document.querySelector('.ingreds-list');


let recipeArray = [];

//listen for page load - fire getRecipe function
window.addEventListener('load', e => {
  getRecipe();
});

//fetch random recipe then fire render function
function getRecipe () {

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(res => {
    recipeArray = res.meals[0]
    renderRecipe(recipeArray)
  })
  .catch(err => console.log(err))

}

function renderRecipe(recipe) {

    title.innerHTML = recipe.strMeal;
    youtube.href = recipe.strYoutube;
    method.innerHTML = recipe.strInstructions;
    image.src = recipe.strMealThumb;
    console.log(recipe);


    //convert object to array - filter key/values - back to object
    const toArray = Object.entries(recipe)
    console.log(toArray);

    let filterMeasures = toArray.filter(([key, val]) => key.includes('Measure')
     && val != '')
     console.log(filterMeasures);
    let filterIngreds = toArray.filter(([key, val]) => key.includes('Ingred') && val != '')

    console.log(filterIngreds);
    filterIngreds.forEach((ingred) => {
        renderIngreds(ingred)
    });

  }



function renderIngreds(ingred) {

  const html = `
  <li>
    <p class="item">${ingred[1]}</p>
  </li>

  `
  ingredsList.innerHTML += html


}
// console.log(item);
// let item = document.querySelector('.item')
// console.log(item);
