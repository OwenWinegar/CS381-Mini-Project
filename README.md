# CS381-Mini-Project

## Overview
This website allows for users to view recipes that would be suitable for the weather at a user inputted location or they can search for recipes based on each recipes temperature, time of day, or weight attributes.

## Project File Structure
- `\images` - contains all of the relevant images for display
- `README.md` - overview of the project
- `favorites.html` - structures the format of the favorites page
- `favorites.js` - view your favorited recipes, pulled from local storage
- `home.html` - structures the format of the home page
- `home.js` - recommends recipes based off of the weather at an inputted location
- `recipes.js` - builds the recipes
- `search.html` - structures the format of the search page
- `search.js` - allows user to search for recipes based on temperature, time of day, and weight
- `styles.css` - contains all of the styles for each html page

## Recipe Data Formatting
- Each recipe has six attributes:
  - name
  - temperature (cold, lukewarm, warm, hot)
  - time (breakfast, lunch, dinner)
  - weight (light, medium, heavy)
  - hyperlink
  - image

- Each of these attributes is used to help construct a recipe card that is displayed on each respective webpage
- Most of them are used to aid in the recommendation and searching of recipes 

## How to Run the Program
1. Open the project folder in Visual Studio or VS Code
2. Ensure all files are in the same directory
3. Execute the program
