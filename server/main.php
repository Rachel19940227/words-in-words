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

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $userInputToLowerCase = strtolower($_POST['userInput']); // Convert userInput to lowercase
//     $userInput = mysqli_real_escape_string($conn, $userInputToLowerCase); // Sanitize user input
//     // Perform database query
//     $sql = "SELECT * FROM dictionary_words WHERE word = '$userInput'";
//     $result = $conn->query($sql);
//     if ($result->num_rows > 0) {
//         $response = true; // Word exists in the dictionary
//     } else {
//         $response = false; // Word does not exist in the dictionary
//     }    

//     // echo json_encode($response); // Send response back to JavaScript
// }

?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>main</title>
<link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
    <div class="container">
        <div id="userInputDisplay"></div> <!-- Add the user input display line -->
        <div id="letterContainer"></div>
        <!-- <form method="POST" action=""> -->
            <label for="userInput">User's input:</label>
            <input type="text" id="userInput" name="userInput" required>
            <button onclick="deleteLetter()">Delete</button> <!-- Add the delete button -->
            <button type="submit" name="submit">Submit</button>
            <p><a href="../server/answers.php">YOU CAN SEE ANSWERS HERE</a></p> <!-- Add the link to page 3 -->
            <div id="wordCount">Word Count: 0</div> <!-- Add the word count box -->
            <div id="wordDisplay"></div> <!-- Add the word display box -->
        <!-- </form> -->
    </div>

    <script src="../script/main.js"></script>
</body>
</html>

