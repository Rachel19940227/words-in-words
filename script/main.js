let wordCounter = 0;
let lastWord = null;

document.addEventListener("DOMContentLoaded", function() {
    const userInputWord = sessionStorage.getItem("userInputWord");
    if (userInputWord) {
        const userInputDisplay = document.getElementById("userInputDisplay");
        userInputDisplay.textContent = "Your letters: " + userInputWord; // Display user input from page 1

        const letterContainer = document.getElementById("letterContainer");
        const userInput = document.getElementById("userInput");

        // Split the word into separate letters
        const letters = userInputWord.split("");

        // Create a letter element for each letter
        letters.forEach(letter => {
            const letterElement = document.createElement("div");
            letterElement.classList.add("letter");
            letterElement.textContent = letter;
            letterElement.addEventListener("click", function() {
                // Add the clicked letter to the input box
                userInput.value += letter;
            });
            letterContainer.appendChild(letterElement);
        });
    } else {
        alert("User input not found. Please go back to the first page and input a word.");
        window.location.href = "index.html";
    }
});

function deleteLetter() {
    const userInput = document.getElementById("userInput");
    userInput.value = userInput.value.slice(0, -1); // Remove the last character
}

function checkWord() {
    const userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") {
        alert("Please enter a word.");
    } else if (userInput === lastWord) {
        alert("This word already exists. Please try again.");
        document.getElementById("userInput").value = ""; // Set user's input to null
    } else {
        // Simulate checking with a database (replace with actual database logic)
        const dictionary = ["apple", "banana", "cherry"]; // Example dictionary

        if (dictionary.includes(userInput.toLowerCase())) {
            alert("Word exists in the dictionary.");
            displayWord(userInput); // Display the word if it exists
            lastWord = userInput; // Update lastWord
        } else {
            alert("No such word in the dictionary. Please try again.");
            document.getElementById("userInput").value = ""; // Set user's input to null
        }
    }
}

function displayWord(word) {
    const wordDisplay = document.getElementById("wordDisplay");
    const wordCount = document.getElementById("wordCount");

    // Create a new text box to display the word
    const wordBox = document.createElement("input");
    wordBox.type = "text";
    wordBox.value = word;
    wordBox.readOnly = true;
    wordDisplay.appendChild(wordBox);

    wordCounter++; // Increment word counter
    wordCount.textContent = "Word Count: " + wordCounter;
}


// function checkWord() {
//     const userInput = document.getElementById("userInput").value;

//     if (userInput.trim() === "") {
//         alert("Please enter a word.");
//     } else if (userInput === lastWord) {
//         alert("This word already exists. Please try again.");
//         document.getElementById("userInput").value = ""; // Set user's input to null
//     } else {
//         if (search_result === true) {
//             alert("Word exists in the dictionary.");
//             displayWord(userInput); // Display the word if it exists
//             lastWord = userInput; // Update lastWord
//         } else {
//             alert("No such word in the dictionary. Please try again.");
//             document.getElementById("userInput").value = ""; // Set user's input to null
//         }
//     }
// }

// function checkWord() {
//     const userInput = document.getElementById("userInput").value.trim();

//     if (userInput === "") {
//         alert("Please enter a word.");
//     } else {
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "../server/main.php", true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     const response = JSON.parse(xhr.responseText);
//                     if (response) {
//                         alert("Word exists in the dictionary.");
//                         displayWord(userInput);
//                         lastWord = userInput;
//                         document.getElementById("userInput").value = "";
//                     } else {
//                         alert("No such word in the dictionary. Please try again.");
//                         document.getElementById("userInput").value = "";
//                     }
//                 } else {
//                     alert("Error: Unable to process request.");
//                 }
//             }
//         };
//         xhr.send("userInput=" + userInput);
//     }
// }

