document.addEventListener("DOMContentLoaded", () => {
  //display the recipes, add them to localstorage if favorited, and then filter by them
    displayRecipes("display");
    addToFavoritesList();
    filterRecipes();
});

//similar code from 9.1 examples to allow a filtering process
//really only changed to not use JQuery and some logic differences
//so, this is sited from 9.1 examples
function filterRecipes() {
  //get all relevent DOM elements
  const recipeList = document.getElementById("recipeListBox");
  const listItems = recipeList.querySelectorAll("li");
  const searchInput = document.getElementById("search");
  const mealSelect = document.getElementById("mealFilter");

  //make the current cache of elements
  const cache = [];

  //build cache with text and time class
  listItems.forEach(li => {
    //similar to 9.1, grab the a tags innertext and the alternate name for the image and combine them
    const text = li.querySelector("a").innerText + " " + li.querySelector("img").alt;
    cache.push({
      //the actual element is in the element category of the cache
      element: li,
      //make lowercase
      text: text.toLowerCase(),
      //add a time constraint based on what the li's class contains
      time: li.classList.contains("breakfast") ? "breakfast" :
            li.classList.contains("lunch") ? "lunch" :
            li.classList.contains("dinner") ? "dinner" : "all",
      //add a weight constraint based on what the li's weight is
      weight: li.classList.contains("light") ? "light" :
              li.classList.contains("medium") ? "medium" :
              li.classList.contains("heavy") ? "heavy" : "all",
      //add a temperature constraint based on what the li's temperature is
      temperature: li.classList.contains("cold") ? "cold" :
              li.classList.contains("lukewarm") ? "lukewarm" :
              li.classList.contains("warm") ? "warm" :
              li.classList.contains("hot") ? "hot" : "all",
    });
  });

  //where the magic happens
  function filter() {
    //make the user inputer all lowercased and without spaces
    const query = searchInput.value.trim().toLowerCase();
    //find what dropdown menu value is selected
    const selectedOption = mealSelect.value;

    //search for recipes
    cache.forEach(item => {
      //only grab if the items text includes the letters from the query
      const matchesText = item.text.includes(query);
      //if all is not selected, then, filter items by their respective time, weight, or temperature
      const matchesMeal = selectedOption === "all" || item.time === selectedOption || item.weight === selectedOption
       || item.temperature === selectedOption;
      //show the li only if it matches both filters
      item.element.style.display = matchesText && matchesMeal ? '' : 'none';
    });
  }

  //if there is input in the search bar or the dropdown is changed, call the filter function
  searchInput.addEventListener("input", filter);
  mealSelect.addEventListener("change", filter);
}

//same function as in home.js
function displayRecipes(classname) {
    const recipes = document.querySelectorAll(`.${classname}`);
    recipes.forEach(li => { li.hidden = false; });
}

//same function as in home.js
function addToFavoritesList(){
    const buttons = document.querySelectorAll(".favorites");

    const savedKeys = Object.keys(localStorage);

    buttons.forEach(btn => {
      let recipeName = btn.id.slice(0, -7);
      if (savedKeys.includes(recipeName)) {
        btn.textContent = "Added!";
        btn.disabled = true;
      }
    });
  
    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.textContent = "Added!";
        btn.disabled = true;
        let currentEleID= btn.id.slice(0,-7);
        let currentEle = getDetailsForLi(currentEleID);
        localStorage.setItem(currentEleID, currentEle);
      });
    });
}

 //same function as in home.js
function getDetailsForLi(elementID){
  const ele = document.getElementById(elementID);

  let itemData = [];

  itemData.push(ele.className);
  itemData.push(ele.id);
  let allChildren = ele.children;
  itemData.push([allChildren[0].getAttribute('href'), allChildren[0].getAttribute('target'), allChildren[0].innerHTML]);
  itemData.push(`<br>`);
  itemData.push([allChildren[2].getAttribute('src'), allChildren[2].getAttribute('alt'),
  allChildren[2].getAttribute('width'), allChildren[2].getAttribute('height')]);
  itemData.push([allChildren[3].getAttribute('class'), allChildren[3].getAttribute('id'), allChildren[3].getAttribute('type')]);

  return JSON.stringify(itemData);
}