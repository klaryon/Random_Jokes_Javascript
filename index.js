//create a variable for button and joke paragraph 
let nextJokeBtn = document.getElementById("nextJokeBtn");
let textJoke = document.getElementById("textJoke");

async function getJoke(){
    // we make a variable outside await fetch, for cleaner code
    const options = {
        method:'GET', // we are getting information from the API
        headers: { 
            Accept: "application/json", //header added from API documentation url
        }
    }

    const jokePromise = await fetch("https://icanhazdadjoke.com/", options); //we have a variable were we fetch a promise

    const joke = await jokePromise.json(); //we retrieve json data

    console.log(joke); // we print jokes in console
    textJoke.innerHTML = joke.joke; // we show jokes in html
}

nextJokeBtn.addEventListener('click', getJoke); // each time we press a button, a new joke appears in console 