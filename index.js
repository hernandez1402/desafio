import { useState } from "react";
import PlanoParqueo from "../components/PlanoParqueo";
import ResumenReserva from "../components/ResumenReserva";
import SelectorZona from "../components/SelectorZona";

const Home = () => {
  const [zonaSeleccionada, setZonaSeleccionada] = useState("Cubierto");

  return (
    <div className="container mt-4">
      <h1>Reserva de Estacionamiento</h1>
      <SelectorZona setZonaSeleccionada={setZonaSeleccionada} />
      <PlanoParqueo zona={zonaSeleccionada} />
      <ResumenReserva />
    </div>
  );
};

export default Home;
