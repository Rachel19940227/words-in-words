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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userInput = $_POST["userInput"];
    // $userInputToLowerCase = strtolower($_POST['userInput']); // Convert userInput to lowercase
    // $userInput = mysqli_real_escape_string($conn, $userInputToLowerCase); // Sanitize user input
    // Perform database query
    $sql = "SELECT COUNT(*) as count FROM dictionary_words WHERE WHERE search_field = :userInput";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':userInput', $userInput);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Return true if userInput exists, false otherwise
    $response = ($result['count'] > 0) ? true : false;
    echo $response;
    
    // Send the response as JSON
    header('Content-Type: application/json');
    echo json_encode(['response' => $response]);
}
?>   

<!doctype html>
<html lang="en">
  <head>
    <title>Main</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet"  type="text/css" href="../styles/styles.css">
  </head>
  <body >
  <?php include ("header.php") ?>
    <div id="mainBody" class="d-flex justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="container text-center">
            <div>
                <h1 id="userInputDisplay"></h1>
            </div>
            <div id="letterContainer" style="margin: 30px;"></div>
            <!-- Start of form -->
            <form id="wordInputForm" method="POST" action="../server/main.php">
                <label for="userInput">User's input:</label>
                <input type="text" id="userInput" name="userInput" method="POST">
                <!-- <button type="button" onclick="deleteLetter()">Delete</button> -->
                <button type="button" class="btn btn-danger" onclick="deleteLetter()">Delete</button>
                <button type="submit" class="btn btn-primary" id="checkWordBtn">Submit</button>
                <!-- <button type="submit" id="checkWordBtn" onclick="checkWord()">Submit</button> -->
            </form>
            <div id="result"></div>
            <!-- End of form -->
            <p id="link"><a href="../server/answers.php">YOU CAN SEE ANSWERS HERE</a></p> <!-- Add the link to page 3 -->
            <div id="wordCount">Word Count: 0</div> <!-- Add the word count box -->
            <div id="wordDisplay"></div> <!-- Add the word display box -->
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../script/main.js"></script>
  </body>
</html>