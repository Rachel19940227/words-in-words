document.addEventListener("DOMContentLoaded", function() {
    const userInputWord = sessionStorage.getItem("userInputWord");
    const dictionary = ["apple", "banana", "cherry"]; // Example dictionary

    const wordList = document.getElementById("wordList");

    if (userInputWord) {
        const combinedWords = []; // Array to store combined words

        // Combine user input letters with dictionary words
        dictionary.forEach(word => {
            const combined = userInputWord + word;
            combinedWords.push(combined);
        });

        // Display the combined words
        combinedWords.forEach(combined => {
            const wordElement = document.createElement("div");
            wordElement.textContent = combined;
            wordList.appendChild(wordElement);
        });
    } else {
        alert("User input not found.");
        window.location.href = "index.html"; // Redirect to the first page if user input is not found
    }
});