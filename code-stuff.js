let bgText = [
    "An open field",
    "A dillapidated castle"
]

let generateButton = document.getElementById("generate-button");

generateButton.onclick = function() {
    let textBlock = document.getElementById("text-block");
    textBlock.textContent = bgText[0]
}