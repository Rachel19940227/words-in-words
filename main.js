document.addEventListener("DOMContentLoaded", function() {
    const userInputWord = sessionStorage.getItem("userInputWord");
    if (userInputWord) {
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

    // Perform validation or database check here
    // For demonstration purposes, show an alert with the validation message
    if (userInput.trim() === "") {
        alert("Please enter a word.");
    } else {
        // Simulate checking with a database (replace with actual database logic)
        const dictionary = ["apple", "banana", "cherry"]; // Example dictionary

        if (dictionary.includes(userInput.toLowerCase())) {
            alert("Word exists in the dictionary.");
        } else {
            alert("No such word in the dictionary. Please try again.");
            document.getElementById("userInput").value = ""; // Set user's input to null
        }
    }
}