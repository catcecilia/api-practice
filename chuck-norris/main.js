const randomJokeBtn = document.getElementById("random-joke-button");
const randomJoke = document.getElementById("random-joke");
const categoryJokeBtns = document.querySelectorAll(".category-button");
const categoryJoke = document.getElementById("category-joke");

//add event listeners to all buttons
randomJokeBtn.addEventListener("click", (e) =>{
    fetchRandomJoke()});

//fetch random joke
async function fetchRandomJoke() { 
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(obj => randomJoke.innerText=obj.value)
    .catch(err => console.log(err));
  } 

//fetch joke by category for each category
categoryJokeBtns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        const category = btn.value;
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(obj => categoryJoke.innerText = obj.value)
        .catch(err => category.log(err));
    })
  })