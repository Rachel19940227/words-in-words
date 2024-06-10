
let wordCount = 0;

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
                inputWord.value += letter;
            });
            letterContainer.appendChild(letterElement);
        });
    } else {
        alert("User input not found. Please go back to the first page and input a word.");
        window.location.href = "../index.html";
    }
});


function deleteLetter() {
    const userInput = document.getElementById("inputWord");
    sessionStorage.setItem("searchWord", inputWord);
    userInput.value = userInput.value.slice(0, -1); // Remove the last character
}


//ajax about submit button which can user API to checj if words are exist.
$(document).ready(function() {
    $('#wordForm').submit(function(e) {
        e.preventDefault();
        var inputWord = $('#inputWord').val();
        $.ajax({
            url: 'http://localhost:8081/checkWordExists?inputWord=' + inputWord,
            type: 'GET',
            success: function(response) {
                if (response === true) {
                    $('#resultDiv').text(inputWord + ' exists in the dictionary.');
                    $('#existingWordsBox').append('<div class="wordBox">' + inputWord + '</div>');
                    wordCount++;
                    $('#wordCount').text('Word Count: ' + wordCount);
                } else {
                    $('#resultDiv').text(inputWord + ' does not exist in the dictionary.');
                }
                // Clear the input box
                $('#inputWord').val('');
            },
        });
    });
});

$(document).ready(function() {
    $('#searchLink').click(function() {
        var inputWord = $('#inputWord').val();
        sessionStorage.setItem('searchWord', inputWord);
    });
});