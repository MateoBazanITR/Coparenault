import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Copa Renault
      </Link>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/Fixture">Fixture</Link>
        <Link to="/Horario">Horarios</Link>
        <Link to="/Anotarse">Anotarse</Link>
        <Link to="/Cantina">Cantina</Link>
        <Link to="/Compra">Compra</Link>
        <Link to="/Iniciarsesion">Login</Link>
        <Link to="/Registrarse">Registro</Link>
      </div>
    </nav>
  );
}

export default Navbar;