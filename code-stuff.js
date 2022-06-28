// const bgText = [
//     "An open field",
//     "A dilapidated castle",
//     "A gloomy cave",
//     "A glimmering city",
// ]

// setting up a set of items to be generated
const bgGenre = [
    "Fantasy",
    "Modern",
    "SciFi",
    "Medieval",
    "Horror",
    "Mystery",
    "Noir",
]
const bgLocation = [
    "Cafe",
    "School",
    "Apartment",
    "House",
    "City",
    "Town",
    "Beach",

]

let generateButton = document.getElementById("generate-button");
let startAgainButton = document.getElementById("start-again")
let genreLine = document.getElementById("genre-variable");
let locationLine = document.getElementById("location-variable");
let hitOnce = false;

generateButton.onclick = function() {
    genreLine.textContent = bgGenre[Math.floor(Math.random() * bgGenre.length)];
    locationLine.textContent = bgLocation[Math.floor(Math.random() * bgLocation.length)];
    const stopAnimatingGenre = setTimeout(stopAnimateWordsGenre,500);
    const stopAnimatingLocation = setTimeout(stopAnimateWordsLocation,1000);
    hitOnce = true;
    if (hitOnce = true) {
        startAgainButton.classList.remove('hidden');
        generateButton.classList.add('hidden');
    }
}

startAgainButton.onclick = function() {
    // animateAll();
    location.reload();
}

function animateGenre() {
    genreLine.textContent = bgGenre[Math.floor(Math.random() * bgGenre.length)];
}

function animateLocation() {
    locationLine.textContent = bgLocation[Math.floor(Math.random() * bgLocation.length)];
}

function stopAnimateWordsGenre() {
    clearInterval(intervalAnimateGenre);
}

function stopAnimateWordsLocation() {
    clearInterval(intervalAnimateLocation);
}

function animateAll() {
    const intervalAnimateGenre = setInterval(animateGenre, 50);
    const intervalAnimateLocation = setInterval(animateLocation, 50);
}
const intervalAnimateGenre = setInterval(animateGenre, 50);
const intervalAnimateLocation = setInterval(animateLocation, 50);













console.log("JS is connected and online") 