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


