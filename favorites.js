document.addEventListener("DOMContentLoaded", () => {
    //load all the favorited recipes
    loadFavorites();
});

function loadFavorites() {
    //grab the recipeListBox element and clear it
    const recipeListBox = document.getElementById("recipeListBox");

    recipeListBox.innerHTML = "";

    //loop through localStorage
    for (let i = 0; i < localStorage.length; i++) {
        //grab the recipe name
        const key = localStorage.key(i);
        //grab the recipes JSON string
        const raw = localStorage.getItem(key);
        //put all of the JSON data into an array
        const data = JSON.parse(raw);

        //build each li
        const li = document.createElement("li");

        //add a classname from the first element
        li.className = data[0];
        //add the li from the second element
        li.id = data[1];

        //build the a tag (link)
        const link = document.createElement("a");
        //grab the link for the recipe in the first element of the array in the 3rd element spot from the JSON data
        link.href = data[2][0];
        //ensure that the link opens a new browser window for the recipe in the second element of the array in the 3rd element spot from the JSON data
        link.target = data[2][1];
        //grab the textContent for the recipe in the third element of the array in the 3rd element spot from the JSON data
        link.textContent = data[2][2];

        //make the line break so the recipe looks similar to the ones I made earlier
        const br = document.createElement("br");

        //build the img element
        const img = document.createElement("img");
        //grab the source for the image in the images folder in the first element of the array in the 5th element spot from the JSON data
        img.src = data[4][0];
        //grab the alternate name for the recipe in the second element of the array in the 5th element spot from the JSON data
        img.alt = data[4][1];
        //grab the width and height for the recipe in the third+fourth elements of the array in the 5th element spot from the JSON data
        img.width = data[4][2];
        img.height = data[4][3];

        //make the "add to favorites" button
        const btn = document.createElement("button");
        //grab the classname in the first element of the array in the 6th element spot from the JSON data
        btn.className = data[5][0];
        //grab the id in the second element of the array in the 6th element spot from the JSON data
        btn.id = data[5][1];
        //grab the button type in the third element of the array in the 6th element spot from the JSON data
        btn.type = data[5][2];
        //change the textContent of the button to be favorited
        btn.textContent = "Favorited!";
        //disable the button
        btn.disabled = true;

        //add a "remove from favorites" button
        const removeBtn = document.createElement("button");
        //make a class for it so I can add relevant css
        removeBtn.className = "remove-favorite";
        //ensure the user knows it is a remove button
        removeBtn.textContent = "Remove";
        //if clicked, remove from the favorites page + localStorage
        removeBtn.addEventListener("click", () => {
            removeFromFavorites(li.id);
        });


        //put all the elements together
        li.appendChild(link);
        li.appendChild(br);
        li.appendChild(img);
        li.appendChild(btn);
        li.appendChild(removeBtn);

        //add the li to the recipeListBox
        recipeListBox.appendChild(li);
    }
    
    //if after looking at all keys in the localStorage and there are no recipes in there
    //display a message saying that there are no favorite recipes saved yet
    if (recipeListBox.children.length === 0) {
        recipeListBox.innerHTML = "<p>No favorites saved yet.</p>";
    }
}

//removes items from localStorage
function removeFromFavorites(recipeID) {
    //ensures the user actually wants to remove the recipe first
    if(confirm("Are you sure you want to remove this recipe from your favorites?")){
        //if so, we then remove the item with the recipeID as the key
        localStorage.removeItem(recipeID);

        //grab the li element, make sure it exists before removing it from the page
        const li = document.getElementById(recipeID);
        if (li) {
            li.remove();
        }
    }
    else{
        //otherwise, exit the function
        return;
    }

    //same story as in loadFavorites, add a message if there are no favorite recipes anymore
    const recipeList = document.getElementById("recipeListBox");
    if (recipeList.children.length === 0) {
        recipeList.innerHTML = "<p>No favorites saved yet.</p>";
    }
}