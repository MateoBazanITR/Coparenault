import "../styles/Home.css";

function Home() {
  const testimonios = [
    {
      texto: "Es buenisimo yo jugue y la pase re bien",
      nombre: "Ramiro Caceres",
      rol: "Alumno del ITR",
    },
    {
      texto: "Me robe todas las perillas de los ventiladores",
      nombre: "El pichi",
      rol: "Alumno del ITR",
    },
    {
      texto: "Mi hijo la paso re bien",
      nombre: "Mamá Ramiro Caceres",
      rol: "Mamá del ITR",
    },
    {
      texto: "Es buenisimo mi novia fue a jugar, la paso re bien",
      nombre: "Francisco Loforte",
      rol: "Alumno del ITR",
    },
    {
      texto: "Mucha variedad de juegos y comida",
      nombre: "Mono",
      rol: "Alumno del ITR",
    },
  ];

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>COPA RENAULT </h1>
          <p>Una verdadera fiesta del deporte intercolegial</p>

          <button>
            ¿Quieres ayudar?
          <br />
          <span>Contactate con nosotros</span>
          </button>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios">
        <h2>Subheading</h2>

        <div className="cards">
          {testimonios.map((item, index) => (
            <div className="card" key={index}>
              <h3>"{item.texto}"</h3>

              <div className="persona">
                <img
                  src="../assets/reno.png"
                  alt="perfil"
                />

                <div>
                  <p>{item.nombre}</p>
                  <span>{item.rol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;