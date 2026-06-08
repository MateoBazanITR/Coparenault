import "../styles/Cantina.css";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";








const productos = [
  {
    nombre: "Coca-Cola",
    precio: "$1000",
    imagen: item1,
  },
  {
    nombre: "Sanguche",
    precio: "$3.000",
    imagen: item2,
  },
  {
    nombre: "Hamburguesa",
    precio: "$7.500",
    imagen: item3,
  },
  {
    nombre: "Sprite",
    precio: "$1.000",
    imagen: item4,
  },
  {
    nombre: "Medialunas",
    precio: "$1.500",
    imagen: item5,
  },
  {
    nombre: "Choripan",
    precio: "$8.000",
    imagen: item6,
  },
  
];

function Cantina() {
  return (
    <div className="catalogo">

      <div className="sidebar">
        <h3>Productos</h3>

        <button className="filtro-btn">
          Lo mas popular!!!
        </button>

        <div className="filtro">
          <p>Precio</p>
          <input type="range" />
        </div>

        <div className="filtro">
          <p>Color</p>

          <label>
            <input type="checkbox" />
            Bebibda
          </label>

          <label>
            <input type="checkbox" />
            Comida
          </label>

          <label>
            <input type="checkbox" />
            Postre
          </label>
        </div>
      </div>

      <div className="contenido">

        <div className="topbar">
          <input type="text" placeholder="Buscar" />

          <div className="botones">
            <button>Mayor precio</button>
            <button>Menor precio</button>
            <button>Mas antiguo</button>
          </div>
        </div>

        <div className="productos-grid">
          {productos.map((producto, index) => (
            <div className="card" key={index}>
              <img src={producto.imagen} alt="" />

              <h3>{producto.nombre}</h3>

              <p>{producto.precio}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Cantina;