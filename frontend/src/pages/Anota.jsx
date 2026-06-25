import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../styles/Anota.css";

function Anota() {
  const [deportes, setDeportes] = useState([]);

  const [equipo, setEquipo] = useState({
    nombre_equipo: "",
    institucion: "",
    categoria: "",
    id_deporte: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/deportes")
      .then((res) => res.json())
      .then((data) => setDeportes(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setEquipo({
      ...equipo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/equipos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(equipo),
        }
      );

      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "¡Equipo registrado!",
        text: data.mensaje,
        confirmButtonText: "Aceptar",
      });

      setEquipo({
        nombre_equipo: "",
        institucion: "",
        categoria: "",
        id_deporte: "",
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al registrar equipo",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="anota-page">
      <h1 className="titulo">Anota tu equipo</h1>

      <form className="anota-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre_equipo"
          placeholder="Nombre del equipo"
          value={equipo.nombre_equipo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="institucion"
          placeholder="Colegio"
          value={equipo.institucion}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="categoria"
          placeholder="Curso"
          value={equipo.categoria}
          onChange={handleChange}
          required
        />

        <select
          name="id_deporte"
          value={equipo.id_deporte}
          onChange={handleChange}
          required
        >
          <option value="">
            Seleccione un Deporte
          </option>
          <option value="">
            Futbol 
          </option>
          <option value="">
            Basquet 
          </option>
          <option value="">
            Voley
          </option>

          {deportes.map((deporte) => (
            <option
              key={deporte.id_deporte}
              value={deporte.id_deporte}
            >
              {deporte.nombre}
            </option>
          ))}
        </select>

        <button type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default Anota;