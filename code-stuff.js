const bgText = [
    "An open field",
    "A dilapidated castle",
    "A gloomy cave",
    "A glimmering city",
]

// setting up a set of items to be generated
const bgTheme = [
    "Fantasy",
    "Modern",
    "SciFi",
]
const bgType = []

let generateButton = document.getElementById("generate-button");

generateButton.onclick = function() {
    let textBlock = document.getElementById("text-block");
    textBlock.textContent = bgText[Math.floor(Math.random() * bgText.length)];

}

console.log("JS is connected and online")