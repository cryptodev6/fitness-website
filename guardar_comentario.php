<?php
include "Config/db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $post_id   = $_POST['post_id'] ?? 1;
    $nombre    = trim($_POST['nombre']);
    $comentario = trim($_POST['comentario']);

    // Verificar que no vengan vacíos
    if ($nombre === "" || $comentario === "") {
        die("Debe llenar todos los campos.");
    }

    // Evitar inyección SQL
    $nombre    = $conn->real_escape_string($nombre);
    $comentario = $conn->real_escape_string($comentario);

    // Guardar
    $sql = "INSERT INTO comments (post_id, name, comment)
            VALUES ($post_id, '$nombre', '$comentario')";

    if ($conn->query($sql)) {
        // Redirige de nuevo al blog
       header("Location: /fitness-website/blog-grid.php?post_id=$post_id");
        exit;

    } else {
        echo "Error al guardar: " . $conn->error;
    }
}
?>
