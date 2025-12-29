// contains all of the recipes in recipe objects

// temperatures:
/* 
cool/cold temperatures 40 and lower
lukewarm temperatures between 41-60
warm temperatures between 61-80
hot temperatures 80+
*/

// times of day are:
/*
breakfast *
lunch * 
dinner *
*/

// weight types are:
/*
light *
medium *
heavy *
*/

function Recipe(name, temperature, time, weight, hyperlink, image){
    this.name = name;
    this.temperature = temperature;
    this.time = time;
    this.weight = weight;
    this.hyperlink = hyperlink;
    this.image = image;
}

const recipeData = [
    {
        name: "Beef Stew",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/beef-vegetable-casserole",
        image:"beef-stew.jpg"
    },
    {
        name: "Chicken Noodle Soup",
        temperature: "cold",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/recipes/chicken-noodle-soup",
        image:"chicken-noodle.jpg"
    },
    {
        name: "Jamaican Oxtail",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/jamaican-oxtail",
        image:"jamaican-oxtail.jpg"
    },
    {
        name: "Bangers and Mash with Onion Gravy",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/bangers-n-mash-with-onion-gravy",
        image:"bangers-n-mash.jpg"
    },
    {
        name: "Double Bean and Roasted Pepper Chili",
        temperature: "cold",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/recipes/double-bean-roasted-pepper-chilli",
        image: "db-rpc.jpg"
    },
    {
        name: "Shepherds Pie",
        temperature: "cold",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/premium/lamb-harissa-cauliflower-shepherds-pie",
        image: "shepherds-pie.jpg"
    },
    {
        name: "Chicken Pot Pie",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/chicken-pot-pie",
        image: "chicke-pot-pie.jpg"
    },
    {
        name: "Smokey Sausage Casserole",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/smoky-sausage-casserole",
        image: "smokey-sausage-casserole.jpg"
    },
    {
        name: "Italian Sausage and Chestnut Pasta",
        temperature: "cold",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/recipes/italian-sausage-chestnut-pasta",
        image: "italisan-sausage-and-chestnut-pasta.jpg"
    },
    {
        name: "Porchetta Ragu",
        temperature: "cold",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.bbcgoodfood.com/recipes/porchetta-ragu",
        image:"porchetta-ragu.jpeg"
    },
    {
        name: "Caramel-Pecan Monkey Bread",
        temperature: "cold",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/caramel-pecan-monkey-bread/",
        image:"caramelp-monkeyb.jpg"
    },
    {
        name: "Pumpkin Pancakes",
        temperature: "cold",
        time: "breakfast",
        weight: "medium",
        hyperlink: "https://www.tasteofhome.com/recipes/fluffy-pumpkin-pancakes/",
        image:"pumpkin-pancakes.jpg"
    },
    {
        name: "Crockpot Crispy Chicken Tinga Tacos with Avocado Jalapeno Crema",
        temperature: "lukewarm",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.halfbakedharvest.com/crispy-chicken-tinga-tacos/",
        image:"ccctt-with-ajc.jpg"
    },
    {
        name: "Chicken Tzatziki Bowls",
        temperature: "lukewarm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.halfbakedharvest.com/chicken-tzatziki-bowls/",
        image:"chicken-tzatziki-bowls.jpg"
    },
    {
        name: "One Pan Caprese Pesto Orzo Bake",
        temperature: "lukewarm",
        time: "dinner",
        weight: "heavy",
        hyperlink: "https://www.halfbakedharvest.com/one-pan-caprese-pesto-orzo-bake/",
        image:"opc-pob.jpg"
    },
    {
        name: "Spicy Chipotle Honey Salmon Bowls",
        temperature: "lukewarm",
        time: "lunch",
        weight: "medium",
        hyperlink: "https://www.halfbakedharvest.com/chipotle-honey-salmon-bowls/",
        image:"spicy-ch-sb.jpg"
    },
    {
        name: "Sweet Potato Kale Salad with Creamy Honey Mustard Dressing",
        temperature: "lukewarm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.halfbakedharvest.com/sweet-potato-kale-salad/",
        image:"spks-with-chmd.jpg"
    },
    {
        name: "Chili Crisp Chicken Mango Cucumber Rice Bowl",
        temperature: "lukewarm",
        time: "lunch",
        weight: "medium",
        hyperlink: "https://www.halfbakedharvest.com/chili-crisp-chicken-mango-rice-bowl/",
        image:"ccc-mango-crb.jpg"
    },
    {
        name: "Pesto Chicken and Avocado Bacon Salad Wraps",
        temperature: "lukewarm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.halfbakedharvest.com/pesto-chicken-and-avocado-bacon-salad-wraps/",
        image:"pc-and-absw.jpg"
    },
    {
        name: "Garlic Butter Chicken Pad Thai",
        temperature: "lukewarm",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.halfbakedharvest.com/chicken-pad-thai/",
        image:"garlic-butter-chicken-pad-thai.jpg"
    },
    {
        name: "Havarti Avocado Sandwich with Spicy Mayo",
        temperature: "lukewarm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.halfbakedharvest.com/havarti-avocado-sandwich/",
        image:"havarti-avocado-sandwich-with-spicy-mayo.jpg"
    },
    {
        name: "Thai Basil Beef Rolls",
        temperature: "lukewarm",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.halfbakedharvest.com/beef-rolls/",
        image:"thai-basil-beef-rolls.jpg"
    },
    {
        name: "Chicken Cobb Salad with Avocado Ranch",
        temperature: "lukewarm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.halfbakedharvest.com/cobb-salad/",
        image:"ccs-with-ar.jpg"
    },
    {
        name: "Full English Breakfast",
        temperature: "lukewarm",
        time: "breakfast",
        weight: "heavy",
        hyperlink: "https://culinaryginger.com/full-english-breakfast/",
        image:"full-english-breakfast.jpg"
    },
    {
        name: "Breakfast Burritos",
        temperature: "lukewarm",
        time: "breakfast",
        weight: "medium",
        hyperlink: "https://kristineskitchenblog.com/breakfast-burritos/",
        image:"breakfast-burritos.jpg"
    },
    {
        name: "Roasted Potatoes and Radishes",
        temperature: "warm",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/recipes/roast-new-potatoes-radishes",
        image:"roasted-potatoes-and-radishes.jpeg"
    },
    {
        name: "Halloumi and Quinoa Fattoush",
        temperature: "warm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/halloumi-quinoa-fattoush",
        image:"halloumi-and-quinoa-fattoush.jpg"
    },
    {
        name: "Sweetcorn Fritters with Eggs and Black Bean Salsa",
        temperature: "warm",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/sweetcorn-fritters-eggs-black-bean-salsa",
        image:"sf-with-e-and-bbs.jpeg"
    },
    {
        name: "Roasted Summer Vegetables",
        temperature: "warm",
        time: "dinner",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/roasted-vegetables",
        image:"roasted-summer-vegetables.jpg"
    },
    {
        name: "Stuffed Rainbow Baguette",
        temperature: "warm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/stuffed-rainbow-baguette",
        image:"stuffed-rainbow-baguette.jpeg"
    },
    {
        name: "Easy Cornflake Tart",
        temperature: "warm",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/easy-cornflake-tart",
        image:"easy-cornflake-tart.jpeg"
    },
    {
        name: "Tomato, Burrata & Broad Bean Salad",
        temperature: "warm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/tomato-burrata-broad-bean-salad",
        image:"tbb-and-bbs.jpg"
    },
    {
        name: "Chia and Yogurt Puddings with Berries",
        temperature: "warm",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/chia-yogurt-puddings-berries",
        image:"c-and-yp-with-b.jpg"
    },
    {
        name: "Roasted Asparagus and Pea Salad",
        temperature: "warm",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.bbcgoodfood.com/recipes/roasted-asparagus-pea-salad",
        image:"ra-and-ps.jpg"
    },
    {
        name: "Mix and Match Seafood Tacos",
        temperature: "warm",
        time: "lunch",
        weight: "medium",
        hyperlink: "https://www.bbcgoodfood.com/recipes/mix-match-seafood-tacos",
        image:"m-and-m-st.jpeg"
    },
    {
        name: "Broiled Grapefruit with Brown Sugar and Cinnamon",
        temperature: "warm",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://rockymountainlodge.com/recipe/broiled-grapefruit-with-brown-sugar-and-cinnamon",
        image:"bg-with-bs-and-c.jpeg"
    },
    {
        name: "Beetroot, Kale, and Goat's Cheese Quiche",
        temperature: "warm",
        time: "breakfast",
        weight: "medium",
        hyperlink: "https://www.egginfo.co.uk/recipes/tom-daleys-beetroot-kale-and-goats-cheese-quiche",
        image:"beetroot-kale-and-goats-cheese-quiche.jpg"
    },
    {
        name: "Mint Cucumber Tomato Sandwiches",
        temperature: "hot",
        time: "lunch",
        weight: "medium",
        hyperlink: "https://www.tasteofhome.com/recipes/mint-cucumber-tomato-sandwiches/",
        image:"mint-cucumber-tomato-sandwiches.jpg"
    },
    {
        name: "Tropical Layered Chicken Salad",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/tropical-layered-chicken-salad/",
        image:"tropical-layered-chicken-salad.jpg"
    },
    {
        name: "Cobb Sandwich",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/cobb-salad-sub/",
        image:"cobb-sandwich.jpg"
    },
    {
        name: "Marinated Antipasto Vegetable",
        temperature: "hot",
        time: "dinner",
        weight: "medium",
        hyperlink: "https://www.tasteofhome.com/recipes/antipasto-marinated-vegetables/",
        image:"marinated-antipasto-vegetable.jpg"
    },
    {
        name: "Spicy Asian Ham Sandwiches",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/spicy-asian-ham-sandwiches/",
        image:"spicy-asian-ham-sandwiches.jpg"
    },
    {
        name: "Lemon Orzo Salad",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/orzo-vegetable-salad/",
        image:"lemon-orzo-salad.jpg"
    },
    {
        name: "Edamame Corn Carrot Salad",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/edamame-corn-carrot-salad/",
        image:"edamame-corn-carrot-salad.jpg"
    },
    {
        name: "Grape Salad",
        temperature: "hot",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/creamy-grape-salad/",
        image:"grape-salad.jpg"
    },
    {
        name: "Loaded Avocado BLT",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/loaded-avocado-blt/",
        image:"loaded-avocado-blt.jpg"
    },
    {
        name: "Lemony Garbanzo Salad",
        temperature: "hot",
        time: "lunch",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/lemony-garbanzo-salad/",
        image:"lemony-garbanzo-salad.jpg"
    },
    {
        name: "Egg Muffins",
        temperature: "hot",
        time: "breakfast",
        weight: "light",
        hyperlink: "https://www.tasteofhome.com/recipes/scrambled-egg-muffins/",
        image:"egg-muffins.jpg"
    },
    {
        name: "Summer Breakfast Skillet",
        temperature: "hot",
        time: "breakfast",
        weight: "heavy",
        hyperlink: "https://www.tasteofhome.com/recipes/summer-breakfast-skillet/",
        image:"summer-breakfast-skillet.jpg"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    //map each recipe from recipeData into new Recipe objects to the constant variable recipes
    const recipes = recipeData.map(r => 
        new Recipe(r.name, r.temperature, r.time, r.weight, r.hyperlink, r.image)
    );

    //add each recipe element to the recipeBox upon load
    recipes.forEach((lo) => {
        //make the new li element
        let newRecipe = document.createElement('li');
        //set the hidden attribute
        newRecipe.hidden = true;
        //make the proper class name
        newRecipe.className = `display ${lo.temperature} ${lo.time} ${lo.weight}`;
        //add an id for this element
        newRecipe.id = `${lo.name}`;
        //add the correct hyperlink, image, and add to favorites button
        newRecipe.innerHTML = `<a href="${lo.hyperlink}" target="_blank">${lo.name}</a><br>
        <img src="images/${lo.image}" alt="${lo.name} recipe" width=200 height=150>
        <button class="favorites button" id="${lo.name}-button" type="button">Add to Favorites</button>`;
        //finally, add the child to the recipeListBox
        let recipeBox = document.getElementById('recipeListBox');
        recipeBox.appendChild(newRecipe);
    });

});