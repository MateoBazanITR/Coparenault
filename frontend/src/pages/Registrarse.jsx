function Registrarse() {
  return (
    <div className="container">

      <h1>Registro</h1>

      <form className="form">

        <input type="text" placeholder="Nombre" />

        <input type="email" placeholder="Correo" />

        <input type="password" placeholder="Contraseña" />

        <button>Registrarse</button>

      </form>

    </div>
  );
}
export default Registrarse;