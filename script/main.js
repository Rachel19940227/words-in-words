let wordCounter = 0;
let lastWord = null;

document.addEventListener("DOMContentLoaded", function() {
    const userInputWord = sessionStorage.getItem("userInputWord");
    if (userInputWord) {
        const userInputDisplay = document.getElementById("userInputDisplay");
        userInputDisplay.textContent = "Your letters: " + userInputWord.toUpperCase(); // Convert to uppercase

        const letterContainer = document.getElementById("letterContainer");
        const userInput = document.getElementById("userInput");

        // Split the word into separate letters
        const letters = userInputWord.toUpperCase().split(""); // Convert to uppercase

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
        window.location.href = "index.php";
    }
});


function deleteLetter() {
    const userInput = document.getElementById("userInput");
    userInput.value = userInput.value.slice(0, -1); // Remove the last character
}

// function checkWord() {
//     const userInput = document.getElementById("userInput").value;

//     if (userInput.trim() === "") {
//         alert("Please enter a word.");
//     } else if (userInput === lastWord) {
//         alert("This word already exists. Please try again.");
//         document.getElementById("userInput").value = ""; // Set user's input to null
//     } else {
//         // Simulate checking with a database (replace with actual database logic)
//         const dictionary = ["apple", "banana", "cherry"]; // Example dictionary

//         if (dictionary.includes(userInput.toLowerCase())) {
//             alert("Word exists in the dictionary.");
//             displayWord(userInput); // Display the word if it exists
//             lastWord = userInput; // Update lastWord
//         } else {
//             alert("No such word in the dictionary. Please try again.");
//             document.getElementById("userInput").value = ""; // Set user's input to null
//         }
//     }
// }

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
//     const userInput = document.getElementById("userInput").value.trim();

//     if (userInput === "") {
//         alert("Please enter a word.");
//     } else if (userInput === lastWord) {
//         alert("This word already exists. Please try again.");
//         document.getElementById("userInput").value = "";
//     } else {
//         fetch('../server/main.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: 'userInput=' + encodeURIComponent(userInput),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Server response:', data); // Log the response for debugging
//             if (data === true) {
//                 alert("Word exists in the dictionary.");
//                 displayWord(userInput);
//                 lastWord = userInput;
//                 document.getElementById("userInput").value = "";
//             } else {
//                 alert("No such word in the dictionary. Please try again.");
//                 document.getElementById("userInput").value = "";
//             }
//         })
//         // .catch(error => {
//         //     console.error('Error:', error);
//         //     alert('An error occurred. Please try again later.');
//         // });
//     }
// }

document.getElementById('wordInputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user input from the form
    var userInput = document.getElementById('userInput').value;

    // Make a POST request to the PHP file with the userInput as form data
    fetch('main.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'userInput=' + userInput, // Form data
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(function(data) {
        // Handle the response
        if (data && data.response !== undefined) {
            if (data.response) {
                alert('Input found in the database.');
            } else {
                alert('Input not found in the database.');
            }
        } else {
            throw new Error('Invalid response from server');
        }
    })
});

  



