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

generateButton.onclick = function() {
    // let textBlock = document.getElementById("text-block");
    let genreLine = document.getElementById("genre-variable");
    let locationLine = document.getElementById("location-variable");
    // textBlock.textContent = bgText[Math.floor(Math.random() * bgText.length)];
    genreLine.textContent = bgGenre[Math.floor(Math.random() * bgGenre.length)];
    locationLine.textContent = bgLocation[Math.floor(Math.random() * bgLocation.length)];

}



console.log("JS is connected and online") 