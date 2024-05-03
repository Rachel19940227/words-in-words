<?php
session_start();
// connection
$host = 'localhost'; // host
$user = 'root'; // user
$password = ''; // password
$dbname = 'dictionary'; // database

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>


<!doctype html>
<html lang="en">
  <head>
    <title>index</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet"  type="text/css" href="../styles/styles.css">
    <link rel="stylesheet" href="../styles/bvambient.css">
</head>
<body>
    <?php include ("header.php") ?>
    <div id="ambient" style="overflow:hidden; position:absolute; width:100%;">
    <div class="d-flex justify-content-center align-items-center" style="min-height: 90vh;">

            <div class="container text-center">
                <h1 id="h1-center">Words in Words</h1>
                <p>Create new words using only the letters from the initial word.</p>
                <form class="form-inline justify-content-center">
                    <label for="wordInput" class="mr-2">Enter a word:</label>
                    <input type="text" id="wordInput" class="form-control mr-2">
                    <button type="button" class="btn btn-primary" id="submitButton" onclick="goToMain()">Submit</button>
                </form>
                <h3 id="h3-center">Or you can choose from words above:</h3>
                <div>
                    <button type="button" class="btn btn-secondary" onclick="chooseWord('weatherman')">weatherman</button>
                    <button type="button" class="btn btn-info" onclick="chooseWord('Soldier')">Soldier</button>
                    <button type="button" class="btn btn-success" onclick="chooseWord('Mermaid')">Mermaid</button>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Bootstrap JS and jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../script/index.js"></script>
<!-- Ambient Main Div -->
<script src="../script/bvambient.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
      var demo1 = new BVAmbient({
        selector: "#ambient",
        fps: 60,
        max_transition_speed: 12000,
        min_transition_speed: 8000,
        particle_number: 30,
        particle_maxwidth: 60,
        particle_minwidth: 10,
        particle_radius: 50,
        particle_opacity: true,
        particle_colision_change: true,
        particle_background: "#58c70c",
        refresh_onfocus: true,
        particle_image: {
          image: false,
          src: ""
        },
        responsive: [
            {
              breakpoint: 768,
              settings: {
                particle_number: "15"
              }
            },
            {
              breakpoint: 480,
              settings: {
                particle_number: "10"
              }
            }
        ]
      });
});
</script>
</body>
</html>