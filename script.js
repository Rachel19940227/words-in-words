document.addEventListener("DOMContentLoaded", function() {
    const wordInput = document.getElementById("wordInput");
    const letterContainer = document.getElementById("letterContainer");

    wordInput.addEventListener("input", function() {
        letterContainer.innerHTML = ""; // Clear previous letters

        // Split the word into separate letters
        const letters = wordInput.value.split("");

        // Create a letter element for each letter
        letters.forEach(letter => {
            const letterElement = document.createElement("div");
            letterElement.classList.add("letter");
            letterElement.textContent = letter;
            letterElement.addEventListener("click", function() {
                // Add the clicked letter to the input box
                wordInput.value += letter;
            });
            letterContainer.appendChild(letterElement);
        });
    });
});
