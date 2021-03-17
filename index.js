// Get elements from DOM
const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

// Global
let punchline;

// Listeners
punchlineBtn.addEventListener('click', getPunchline);
newJokeBtn.addEventListener('click', getJoke);

// Logic to show punchline
function getPunchline() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}

// Logic to show new joke
async function getJoke() {
  try {

    // call API for new joke
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    // from json to object
    const joke = await jokePromise.json();
    
    // insert 'setup' to page
    setupDiv.innerHTML = joke[0].setup;
    // update global var with current 'punchline'
    punchline = joke[0].punchline;

    // remove previous punchline
    punchlineDiv.innerText = '';
    punchlineDiv.classList.remove('bubble');
    
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

  } catch(error) {
    console.log(error);
  }  
}

