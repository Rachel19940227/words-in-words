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

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>input</title>
<link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
    <div class="container">
        <h1>Words in words</h1>
        <p>create new words using only the letters from the initial word</p>
        <label for="wordInput">Enter a word:</label>
        <input type="text" id="wordInput">
        <button id="submitButton" onclick="goToMain()">Submit</button> <!-- Add the submit button -->
        <h2>Or you can choose from words above:</h2>
        <div>
            <button onclick="chooseWord('weatherman')">weatherman</button>
            <button onclick="chooseWord('Soldier')">Soldier</button>
            <button onclick="chooseWord('Mermaid')">Mermaid</button>
        </div>
    </div>
    <script src="../script/input.js"></script>
</body>
</html>