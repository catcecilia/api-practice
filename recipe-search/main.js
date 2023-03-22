const recipeList = document.querySelector('recipe-list');
const form = document.querySelector('form');
const btn = document.querySelector('button');
const ingredient = document.getElementById("ingredients");


btn.addEventListener('submit', function(e){
    console.log('poop');
    e.preventDefault();
    console.log(ingredient.value);
    fetchRecipes(ingredient.value);
});



// upon submitting data, this function is called which does a request to grab data from recipe puppy
function fetchRecipes(ingredients){
    recipeList.innerHTML="";
    ingredients = ingredients.split("/[ ,] ").join(",");
    return fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    .then(res => res.json())
    .then(function(recipes){
        if (recipes.meals){
            recipes.meals.forEach(recipe => {
                const li = document.createElement('li');
                const title = document.createElement('h2');
                const thumbnail= document.createElement('img');
                title.textContent = recipe.strMeal;
                thumbnail.innerHTML= `<img src='${recipe.strMealThumb}' alt='${recipe.strMeal}' width="700" height="700">`;
                li.appendChild(title);
                li.appendChild(thumbnail);
                recipeList.appendChild(li);
            });
        } else {
            const msg = document.createElement('p');
            msg.textContent = 'No recipes found.';
            recipeList.appendChild(msg);
        }
        
    });
}
