import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/Registrarse.css";

function Registrarse() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/registro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: data.mensaje,
      });

      setNombre("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar el usuario",
      });
    }
  };

  return (
    <div className="registro-page">
      <h1>Crear Cuenta</h1>

      <form className="registro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Registrarse;