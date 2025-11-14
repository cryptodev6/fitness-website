const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener comentarios por post
router.get("/:post_id", (req, res) => {
  const sql = `SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC`;

  db.query(sql, [req.params.post_id], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// Crear comentario
router.post("/", (req, res) => {
  const { post_id, author, comment } = req.body;

  const sql = `INSERT INTO comments (post_id, author, comment) VALUES (?, ?, ?)`;

  db.query(sql, [post_id, author, comment], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, id: data.insertId });
  });
});

module.exports = router;
