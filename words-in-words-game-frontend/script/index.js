function goToMain() {
    const wordInput = document.getElementById("wordInput").value;
    if (wordInput.trim() === "") {
        alert("Please enter a word.");
    } else {
        sessionStorage.setItem("userInputWord", wordInput);
        window.location.href = "html/main.html";
    }
}

function chooseWord(word) {
    sessionStorage.setItem("userInputWord", word);
    window.location.href = "html/main.html";
}

document.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
          selector: "#ambient",
          fps: 60,
          max_transition_speed: 12000,
          min_transition_speed: 8000,
          particle_number: 30,
          particle_maxwidth: 30,
          particle_minwidth: 10,
          particle_radius: 50,
          particle_opacity: true,
          particle_colision_change: true,
          particle_background: "#58c70c"
    });
});