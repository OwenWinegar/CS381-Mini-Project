// api key for geoapify (free weather api)
const apiKey = "API_KEY_GOES_HERE";
// input box
const input = document.getElementById("location");
// suggestions box
const suggestionsBox = document.getElementById("suggestions");
// weather box
const weatherBox = document.getElementById("weather");
// recipe box
const recipeBox = document.getElementById("recipeListBox");

// allows me to find the inputted location of the user and will send the actual
// coordinates to a weather function
input.addEventListener("input", () => {
    const query = input.value;
    
    // only search when user typed enough chars
    if (query.length < 3) {
      suggestionsBox.hidden = true;
      suggestionsBox.innerHTML = "";
      return;
    }
    //otherwise, hide the suggestions box
    else{
      suggestionsBox.hidden = false;
    }

    //find places
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        //clear the suggestions box
        suggestionsBox.innerHTML = "";
        
        //show each place
        data.features.forEach(place => {
          const li = document.createElement("li");
          li.className = "temp-places";
          li.textContent = place.properties.formatted;

          //when a suggestion is clicked, get the weather info from the free weather API --> open-meteo
          li.onclick = () => {
            input.value = place.properties.formatted;
            //hide and clear the suggestions box
            suggestionsBox.innerHTML = "";
            suggestionsBox.hidden = true;
  
            //send coords and timezone to the weather function
            const lat = place.properties.lat;
            const lon = place.properties.lon;
            const tz = place.properties.timezone.name;
            //show the weather box as well
            weatherBox.hidden = false;

            //get weather and time
            getWeather(lat, lon, tz);
          };

          //add each suggestion to the suggestions box
          suggestionsBox.appendChild(li);
        });
      })
      .catch(err => console.log(err));
});

//allows me to get the weather from the place the user selected
//and then calls to suggest a recipe based on that location
async function getWeather(lat, lon, tz){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();

    //grabs a a JSON object with the current weather of the spot the user chose
    const wx = data.current_weather;

    //grabs the temperature from the JSON object and converts it to Fahrenheit
    const temperature = ((parseFloat(wx.temperature))*1.8+32).toFixed(0);
    //gets the current time of that area
    const localTime = getLocalTime(tz);

    //add all of that to the weatherbox
    weatherBox.innerHTML = `
        Temperature: ${temperature}°F<br>
        Local Time: ${localTime}<br>
    `;

    //hide all recipes that were previously displayed
    hideRecipes();
    //suggest all recipes that fit within that weather format
    suggestRecipes(wx);
    //if the user clicks the "add to favorites" button, follow through with this function
    addToFavoritesList();
}

function suggestRecipes(place){
  //get temp in Fahrenheit
    const temperature = ((parseFloat(place.temperature))*1.8+32).toFixed(0);

    if(temperature <= 40){
      displayRecipes("cold");
    }
    else if(temperature >= 41 &&temperature <= 60){
      displayRecipes("lukewarm");
    }
    else if(temperature >= 61 &&temperature <= 80){
      displayRecipes("warm");
    }
    else{
      displayRecipes("hot");
    }
}

//get time for the timezone
function getLocalTime(timezone) {
  //make a new Date object to keep track of our time
  const now = new Date();

  //12hr timezone with hour and minutes for the current timezone given from the weather function
  //then formate this properly to return it to the user
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone
  }).format(now);
}

//display all recipes that fit the class criteria
function displayRecipes(classname) {
  const recipes = document.querySelectorAll(`.${classname}`);
  recipes.forEach(li => { li.hidden = false; });
}

//hide all li
function hideRecipes() {
  const recipes = recipeBox.querySelectorAll('li');
  recipes.forEach(li => { li.hidden = true; });
}

//add a recipe to the favorites/localStorage
function addToFavoritesList(){
  //grab all of the favorites buttons
  const buttons = document.querySelectorAll(".favorites");

  //all the saved recipes from localStorage in a string array of the keys
  const savedKeys = Object.keys(localStorage);

  //makes sure the button is disabled for each favorited recipe in the localStorage
  buttons.forEach(btn => {
    //removes the "-button" from the button id, so i can get the actual object
    let recipeName = btn.id.slice(0, -7);
    //if the name is favorited, change the textcontent of the button and disable it
    if (savedKeys.includes(recipeName)) {
      btn.textContent = "Added!";
      btn.disabled = true;
    }
  });

  //if a button is clicked, add it to localStorage and disable it
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      //if this isn't there, I am not able to add it properly, because the button won't be loaded in properly
      e.stopPropagation();
      //disable the button for the page
      btn.textContent = "Added!";
      btn.disabled = true;
      //gets the current recipe card and adds it to localStorage
      let currentEleID= btn.id.slice(0,-7);
      //gets all the details for the current recipe and returns it in JSON format
      let currentEle = getDetailsForLi(currentEleID);
      //add to localStorage with the key being the element ID
      localStorage.setItem(currentEleID, currentEle);
    });
  });
}

//return all details of the recipe li element in an array
function getDetailsForLi(elementID){
  //grab the li element
  const ele = document.getElementById(elementID);

  //make the data array
  let itemData = [];

  //class
  itemData.push(ele.className);
  //id
  itemData.push(ele.id);
  // get the a, br, img, and button children
  let allChildren = ele.children;
  //push the link, target, and innerHTML of the a tag into an array and then push that into itemData
  itemData.push([allChildren[0].getAttribute('href'), allChildren[0].getAttribute('target'), allChildren[0].innerHTML]);
  //add a br element
  itemData.push(`<br>`);
  //push the src of the image, alternate name, and the width+height of the img element into an array and then push that into itemData
  itemData.push([allChildren[2].getAttribute('src'), allChildren[2].getAttribute('alt'),
  allChildren[2].getAttribute('width'), allChildren[2].getAttribute('height')]);
  //push the class, id, and type of the button into an array and then push that into itemData
  itemData.push([allChildren[3].getAttribute('class'), allChildren[3].getAttribute('id'), allChildren[3].getAttribute('type')]);

  //finally, make all of this into a JSON string so it can be put into localStorage properly
  return JSON.stringify(itemData);
}
