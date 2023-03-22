const recipeList = document.querySelector('.recipe-list');
const form = document.querySelector('form');
const btn = document.querySelector('button');
const ingredient = document.getElementById("ingredients");


btn.addEventListener('click', function(e){
    e.preventDefault();
    fetchRecipes(ingredient.value);
});



// upon submitting data, this function is called which does a request to grab data from recipe puppy
function fetchRecipes(ingredient){
    ingredient = ingredient.replaceAll(" ", "_");
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(response => response.json())
    .then(object => createRecipeList(object))
    .catch(error =>console.log(error));
}

function createRecipeList(recipes){
    recipes.meals.forEach(recipe => {
        const title = document.createElement("h4");
        const image = document.createElement("img");
        const listItem = document.createElement("div");

        title.innerText = recipe.strMeal;
        image.src = recipe.strMealThumb;
        image.height= "250";
        listItem.appendChild(title);
        listItem.appendChild(image);
        recipeList.appendChild(listItem);
    });
}
