import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar">

      <h1>Copa Renault</h1>

      <div className="links">

        <Link to="/">Inicio</Link>

        <Link to="/fixture">Fixture</Link>

        <Link to="/horario">Horarios</Link>

        <Link to="/anota">Anotarse</Link>

        <Link to="/cantina">Cantina</Link>

        <Link to="/compra">Compra</Link>

        <Link to="/iniciarsesion">Login</Link>

        <Link to="/registrarse">Registro</Link>

      </div>

    </nav>

  );
}

export default Navbar;