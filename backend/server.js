const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/posts", require("./routes/post"));

app.listen(3000, () => console.log("Servidor activo en http://localhost:3000"));

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

const commentsRoutes = require("./routes/comments");
app.use("/comments", commentsRoutes);

const postsRoutes = require("./routes/post");
app.use("/posts", postsRoutes);

