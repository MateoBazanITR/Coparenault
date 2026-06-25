import "../styles/Fixture.css";
import logo from "../assets/logocopa.png";

function Fixture() {
  return (
    <div className="fixture-page">

      <div className="fixture-overlay">

        <div className="fixture-header">

          <div className="fixture-texto">
            <h1>Fixture de Partidos</h1>

            <p>
              Conocé cuándo y dónde se juegan todos
              los partidos de la Copa Renault.
            </p>

            <button className="btn-descargar">
              Descargar fixture
            </button>
          </div>

          <div className="fixture-icono">
            <img src={logo} alt="Icono de fixture" />
          </div>

        </div>

        <div className="filtros">

          <select>
            <option>Deporte</option>
            <option>Fútbol</option>
            <option>Basquet</option>
            <option>Voley</option>
          </select>

          <select>
            <option>Categoría</option>
            <option>Menor</option>
            <option>Intermedia</option>
            <option>Mayor</option>
          </select>

          <select>
            <option>Cancha</option>
            <option>Cancha 1</option>
            <option>Cancha 2</option>
            <option>Cancha 3</option>
            <option>Cancha 4</option>
          </select>

          <button className="btn-ver">
            Ver partidos
          </button>

        </div>

        <h2 className="fecha-titulo">
          Viernes 14 de Mayo
        </h2>

        <div className="partidos">

          <div className="partido">
            <span className="hora">09:00</span>
            <span>Intermedia</span>
            <span>Espiritu Santo</span>
            <span className="vs">VS</span>
            <span>Jesus Maria</span>
            <span>Cancha 1</span>
          </div>

          <div className="partido">
            <span className="hora">10:30</span>
            <span>Menor</span>
            <span>Renault</span>
            <span className="vs">VS</span>
            <span>Corazon de Maria</span>
            <span>Cancha 2</span>
          </div>

          <div className="partido">
            <span className="hora">12:00</span>
            <span>Mayor</span>
            <span>Santa maria</span>
            <span className="vs">VS</span>
            <span>Lasalle</span>
            <span>Cancha 1</span>
          </div>

          <div className="partido">
            <span className="hora">13:30</span>
            <span>Mayor</span>
            <span>Deportivo Sur</span>
            <span className="vs">VS</span>
            <span>Manuel Belgrano</span>
            <span>Cancha 3</span>
          </div>

        </div>

        <button className="btn-mas">
          Ver más partidos
        </button>

      </div>

    </div>
  );
}

export default Fixture;