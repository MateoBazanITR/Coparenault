import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1");

    res.json({
      mensaje: "Conexión exitosa",
      rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error de conexión",
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000");
});