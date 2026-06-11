function Compra() {
  return (
    <div className="container">

      <h1>Compra de Entradas</h1>

      <form className="form">

        <input type="text" placeholder="Nombre" />

        <input type="number" placeholder="Cantidad" />

        <button>Comprar</button>

      </form>

    </div>
  );
}

export default Compra;