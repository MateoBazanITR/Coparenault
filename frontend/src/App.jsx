import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Anota from "./pages/Anota";
import Cantina from "./pages/Cantina";
import Compra from "./pages/Compra";
import Fixture from "./pages/Fixture";
import Iniciarsesion from "./pages/Iniciarsesion";
import Registrarse from "./pages/Registrarse";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/anota" element={<Anota />} />

        <Route path="/cantina" element={<Cantina />} />

        <Route path="/compra" element={<Compra />} />

        <Route path="/fixture" element={<Fixture />} />


        <Route path="/iniciarsesion" element={<Iniciarsesion />} />

        <Route path="/registrarse" element={<Registrarse />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;