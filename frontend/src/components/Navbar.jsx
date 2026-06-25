import { Link } from "react-router-dom";
import logo from "../assets/logocopa.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo Copa Renault" />
      </Link>

      <div className="navbar-links">
        <Link to="/Fixture">Fixture</Link>
        <Link to="/Anota">Anota a tu equipo</Link>

        <a
          href="https://www.passline.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Compra entradas
        </a>

        <Link to="/Cantina">Cantina</Link>

        <Link
          to="/Iniciarsesion"
          className="login-btn"
        >
          Iniciar sesión
        </Link>

        <Link
          to="/Registrarse"
          className="registro-btn"
        >
          Registrarse
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;