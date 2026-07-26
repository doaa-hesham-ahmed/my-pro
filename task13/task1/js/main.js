"use strict"

let searchInput = document.querySelector("#searchInput");
let userSelect = document.querySelector("#userSelect");
let dataRow = document.querySelector("#dataRow");

const recipesList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
];

let options = "";
for(let item of recipesList){
    options += `<option value="${item}">${item}</option>`;
}
userSelect.innerHTML = options;

async function getRecipes(searchTerm="pizza"){
    try{
        let res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
        );
        res = await res.json();
        displayRecipes(res.data.recipes);
    }
    catch(error){
        console.log(error);
    }
}
getRecipes();

function displayRecipes(arr){
    let cartona = "";
    for(let recipe of arr){
        cartona += `

        <div class="col-md-3 col-sm-6">

            <div class="card shadow">
                <img 
                src="${recipe.image_url}"
                class="card-img-top"
                alt="${recipe.title}">

                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>

                    <p class="card-text"> Publisher:${recipe.publisher}</p>

                    <p class="card-text">ID:${recipe.recipe_id}</p>
                </div>
            </div>
        </div>
        `;
    }
    dataRow.innerHTML = cartona;
}

searchInput.addEventListener("input",function(e){
    let value = e.target.value.toLowerCase();
    if(value){
        getRecipes(value);
    }
    else{
        getRecipes("pizza");
    }
});

userSelect.addEventListener("change",function(e){
    getRecipes(e.target.value);
});
