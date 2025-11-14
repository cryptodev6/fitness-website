const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener todos los posts
router.get("/", (req, res) => {
  const sql = `
    SELECT 
      p.*,
      (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments
    FROM posts p
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Obtener detalle de un post
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM posts WHERE id = ?`;
  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data[0]);
  });
});

// 💥 Crear un nuevo post
router.post("/", (req, res) => {
  const { title, excerpt, content, image } = req.body;

  const sql = `
    INSERT INTO posts (title, excerpt, content, image)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [title, excerpt, content, image], (err, result) => {
    if (err) {
      console.error("Error insertando:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    res.json({ message: "Post creado con éxito", id: result.insertId });
  });
});

// 👇 EL EXPORT SIEMPRE VA AL FINAL
module.exports = router;

