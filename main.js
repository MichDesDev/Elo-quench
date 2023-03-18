// when the user press the button, a new word appears with 1 matching definition and 1 matching example
// GOOD SOURCE FOR THE WORDS: https://randomwordgenerator.com/vocabulary.php

const words = [
    { 
        word: "equivocate",
        definition: "use ambiguous language so as to conceal the truth or avoid committing oneself.",
        example: "the government have equivocated too often in the past.",
    }, { 
        word: "perfidious",
        definition: "deceitful and untrustworthy.",
        example: "She described the new criminal bill as a perfidious attack on democracy.",
    }, { 
        word: "ineluctable",
        definition: "unable to be resisted or avoided; inescapable.",
        example: "the ineluctable facts of history.",
    }, { 
        word: "extenuate",
        definition: "cause (an offence) to seem less serious.",
        example: "even the fact that you once helped to save my life could not extenuate your offence.",
    }, { 
        word: "nonchalant",
        definition: "(of a person or manner) feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.",
        example: "she gave a nonchalant shrug.",
    }
];

const getRandomIndex = (objArray) => {
    return Math.floor(Math.random() * objArray.length)
};

let i = words[getRandomIndex(words)]

/* HERE is a test to see if logic works and can print random word:
console.log(i.word);
console.log(i.definition);
console.log(i.example);
*/

// HERE I DEFINE ELEMENTS WITH VARIBLES FOR BETTER CODE
const newWord = document.getElementById("new-word");
const definition = document.getElementById("definition");
const example = document.getElementById("example");
const genNewWord = document.getElementById("genNewWord");

// HERE I HIDE THE VARIABLES I WANT TO SHOW AFTER BUTTON IS PRESSED
newWord.hidden = true;
definition.hidden = true;
example.hidden = true;

// THIS FUNCTION WILL SHOW THE NEW WORD AND ASSIGN HTML ELEMENT THE NEW WORD INFO
function showNewWord() {
    newWord.hidden = false;
    definition.hidden = false;
    example.hidden = false;
    genNewWord.style.display = "none";
    document.getElementById("practice").style.display = "block"

    newWord.innerHTML = i.word;
    definition.innerHTML = "<strong>Definition: </strong>" + i.definition;
    example.innerHTML = "<strong>Example: </strong>" + i.example;
}

genNewWord.addEventListener('click', showNewWord)












