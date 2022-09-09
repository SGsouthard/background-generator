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

const bgColorScheme = [
    "Monochromatic",
    "Analogous",
    "Complementary",
    "Triadic",
    "Split-complementary",
    "Tetradic"
]

const bgColorMain = [
    "Black",
    "Grey",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink"
]

const bgPerspective = [
    "First-Point Perspective",
    "Second-Point Perspective",
    "Third-Point Perspective"
]

let generateButton = document.getElementById("generate-button");
let startAgainButton = document.getElementById("start-again")
let genreLine = document.getElementById("genre-variable");
let locationLine = document.getElementById("location-variable");
let extrasButton = document.getElementById("extras-button");
let extraStuffDiv = document.getElementById("extra-stuff");
let colorSchemeVariable = document.getElementById("color-scheme-variable");
let colorMainVariable = document.getElementById("color-main-variable");
let perspectiveVariable = document.getElementById("perspective-variable");
let generateExtras = document.getElementById("generate-extras");
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
        extrasButton.classList.remove('hidden');
        hitOnce = false;
    }
    // if (extraStuffDiv.classList.contains('hidden')) {
    //     console.log("beep beep")
    // }
}

//trying to make the Extras generate/stop
extrasButton.onclick = function() {
    extraStuffDiv.classList.remove('hidden');
    hitOnce = true;
    if (hitOnce = true) {
        extrasButton.classList.add('hidden');
        generateExtras.classList.remove('hidden');
        extrasButton.classList.add('hidden');
    }
    const intervalAnimateColorScheme = setInterval(animateColorScheme, 50);
    const intervalAnimateColorMain = setInterval(animateColorMain, 50);
    const intervalAnimatePerspective = setInterval(animatePerspective, 50);
}

generateExtras.onclick = function() {
    colorSchemeVariable.textContent = bgColorScheme[Math.floor(Math.random() * bgColorScheme.length)];
    colorMainVariable.textContent = bgColorMain[Math.floor(Math.random() * bgColorMain.length)];
    perspectiveVariable.textContent = bgPerspective[Math.floor(Math.random() * bgPerspective.length)];
    const stopAnimatingColorScheme = setTimeout( stopAnimateWordsColorScheme, 500);
    const stopAnimatingColorMain = setTimeout( stopAnimateWordsColorMain, 1000);
    const stopAnimatingPerspective = setTimeout( stopAnimateWordsPerspective, 1500);
}

startAgainButton.onclick = function() {
    location.reload();
}

function animateGenre() {
    genreLine.textContent = bgGenre[Math.floor(Math.random() * bgGenre.length)];
}

function animateLocation() {
    locationLine.textContent = bgLocation[Math.floor(Math.random() * bgLocation.length)];
}

function animateColorScheme() {
    colorSchemeVariable.textContent = bgColorScheme[Math.floor(Math.random() * bgColorScheme.length)];
}

function animateColorMain() {
    colorMainVariable.textContent = bgColorMain[Math.floor(Math.random() * bgColorMain.length)];
}

function animatePerspective() {
    perspectiveVariable.textContent = bgPerspective[Math.floor(Math.random() * bgPerspective.length)];
}

function stopAnimateWordsGenre() {
    clearInterval(intervalAnimateGenre);
}

function stopAnimateWordsLocation() {
    clearInterval(intervalAnimateLocation);
}

function stopAnimateWordsColorScheme() {
    clearInterval(intervalAnimateColorScheme);
}

function stopAnimateWordsColorMain() {
    clearInterval(intervalAnimateColorMain);
}

function stopAnimateWordsPerspective() {
    clearInterval(intervalAnimatePerspective);
}

function animateAll() {
    const intervalAnimateGenre = setInterval(animateGenre, 50);
    const intervalAnimateLocation = setInterval(animateLocation, 50);
}

const intervalAnimateGenre = setInterval(animateGenre, 50);
const intervalAnimateLocation = setInterval(animateLocation, 50);













console.log("JS is connected and online") 