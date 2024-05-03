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
<title>Word Answers</title>
<link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
    <div class="container">
        <h2>Word Answers</h2>
        <div id="wordList"></div>
    </div>
    <script src="../script/answers.js"></script>
</body>
</html>