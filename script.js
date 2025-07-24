var letters;

function emptyTextArea() {
    var input = document.getElementById("input");
    input.value = "";
}

async function fixClicked() {
    letters = [];
    readInput();
    switchLetters();
    printFixedLetters();
    await copyTextToClipboard();
    showSuccessMessage();
}

async function printFixedLetters() { document.getElementById("input").value = letters; }

async function showSuccessMessage() {
    await new Promise(resolve => setTimeout(resolve, 500));
    alert("Copied de-capslocked text to clipboard! \n\n Use STRG+V to paste it.");
}

function readInput() {
    var input = document.getElementById("input");
    letters = input.value.split("");
}

function switchLetters(text) {
    if (typeof text === "string") {
        var arr = text.split("");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = checkLetter(arr[i]);
        }
        return arr.join("");
    }

    for (var i = 0; i < letters.length; i++) {
        letters[i] = checkLetter(letters[i]);
    }
    letters = letters.join("");
}

function checkLetter(letter) {
    if (isLowerCase(letter)) return letter.toUpperCase();
    if (isUpperCase(letter)) return letter.toLowerCase();
}

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

function isUpperCase(letter) {
    return letter === letter.toUpperCase();
}

async function copyTextToClipboard() {
    try {
        await navigator.clipboard.writeText(letters);
        console.log('Content copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

if (typeof module !== 'undefined') {
    module.exports = { switchLetters };
}
