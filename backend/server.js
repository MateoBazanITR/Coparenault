const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* =====================================
   RUTA PRINCIPAL
===================================== */

app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

/* =====================================
   USUARIOS
===================================== */

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.error("ERROR:", err);

      return res.status(500).json({
        error: "Error al obtener usuarios",
      });
    }

    res.json(results);
  });
});

/* =====================================
   LOGIN
===================================== */

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM usuarios WHERE email = ? AND password_hash = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("ERROR SQL:", err);

      return res.status(500).json({
        error: "Error del servidor",
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        mensaje: "Correo o contraseña incorrectos",
      });
    }

    res.json({
      mensaje: "Login exitoso",
      usuario: results[0],
    });
  });
});


/* =====================================
   Registro
===================================== */

app.post("/registro", (req, res) => {
  console.log("DATOS RECIBIDOS:", req.body);

  const { nombre, email, password } = req.body;

  const sql = `
    INSERT INTO usuarios
    (nombre, email, password_hash)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, email, password], (err, result) => {
    console.log("ERROR:", err);
    console.log("RESULT:", result);

    if (err) {
      return res.status(500).json({
        mensaje: "Error al registrar usuario",
      });
    }

    res.json({
      mensaje: "Usuario registrado correctamente",
    });
  });
});
/* =====================================
   DEPORTES
===================================== */

app.get("/deportes", (req, res) => {
  const sql = "SELECT * FROM deportes";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        error: "Error al obtener deportes",
      });
    }

    res.json(results);
  });
});

/* =====================================
   REGISTRAR EQUIPO
===================================== */

app.post("/equipos", (req, res) => {
  const {
    nombre_equipo,
    institucion,
    categoria,
    id_deporte,
  } = req.body;

  const sql = `
    INSERT INTO equipos (
      nombre_equipo,
      institucion,
      categoria,
      id_deporte,
      fecha_inscripcion,
      estado
    )
    VALUES (
      ?,
      ?,
      ?,
      ?,
      NOW(),
      'pendiente'
    )
  `;

  db.query(
    sql,
    [
      nombre_equipo,
      institucion,
      categoria,
      id_deporte,
    ],
    (err, result) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          mensaje: "Error al registrar equipo",
        });
      }

      res.json({
        mensaje: "Equipo registrado correctamente",
        id: result.insertId,
      });
    }
  );
});

/* =====================================
   SERVIDOR
===================================== */

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});