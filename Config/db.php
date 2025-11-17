<?php
$host = "localhost";
$user = "root";
$pass = "12345678";
$db   = "fitness_blog";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>


