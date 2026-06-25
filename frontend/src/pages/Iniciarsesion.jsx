import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../styles/Iniciarsesion.css";

function Iniciarsesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          password,
        }
      );

      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso",
      });

      console.log(respuesta.data);

      setEmail("");
      setPassword("");

      navigate("/home");

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Correo o contraseña incorrectos",
      });
    }
  };

  return (
    <div className="iniciarsesion-page">
      <h1>INICIAR SESIÓN</h1>

      <form
        className="iniciarsesion-form"
        onSubmit={handleLogin}
      >
        <input
          type="email"
          placeholder="Email"
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
          Confirmar
        </button>
      </form>

      <div className="registro-link">
        ¿No tienes cuenta?{" "}
        <a href="/Registrarse">
          Regístrate
        </a>
      </div>
    </div>
  );
}

export default Iniciarsesion;