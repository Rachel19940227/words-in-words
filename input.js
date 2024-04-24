function goToPageTwo() {
    const wordInput = document.getElementById("wordInput").value;
    if (wordInput.trim() === "") {
        alert("Please enter a word.");
    } else {
        sessionStorage.setItem("userInputWord", wordInput);
        window.location.href = "main.html";
    }
}