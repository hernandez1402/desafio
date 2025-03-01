# desafio
Desafio 1 de la materia DPS MH180755
import { useDispatch } from "react-redux";
import { reservarEspacio } from "../store";

const Espacio = ({ index, zona, ocupado }) => {
  const dispatch = useDispatch();

  const handleReserva = () => {
    if (!ocupado) {
      const tiempo = prompt("Ingrese el tiempo en horas:");
      if (tiempo) dispatch(reservarEspacio({ zona, index, tiempo: Number(tiempo) }));
    }
  };

  return (
    <button className={`btn ${ocupado ? "btn-danger" : "btn-success"}`} onClick={handleReserva}>
      {ocupado ? "Ocupado" : "Libre"}
    </button>
  );
};

export default Espacio;
import Espacio from "./Espacio";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const PlanoParqueo = ({ zona }) => {
  const espacios = useSelector((state) => state.parqueo.zonas[zona]);

  return (
    <div className="d-flex flex-wrap gap-2">
      {espacios.map((ocupado, index) => (
        <Espacio key={index} index={index} zona={zona} ocupado={ocupado} />
      ))}
    </div>
  );
};
import { useSelector } from "react-redux";

const ResumenReserva = () => {
  const reserva = useSelector((state) => state.parqueo.reserva);

  if (!reserva) return <p>No hay reservas</p>;

  return (
    <div className="alert alert-info">
      <h4>Resumen de Reserva</h4>
      <p>Zona: {reserva.zona}</p>
      <p>Espacio: {reserva.index + 1}</p>
      <p>Tiempo: {reserva.tiempo} horas</p>
      <p>Total: ${reserva.total}</p>
    </div>
  );
};

export default ResumenReserva;
const SelectorZona = ({ setZonaSeleccionada }) => {
    return (
      <select className="form-select" onChange={(e) => setZonaSeleccionada(e.target.value)}>
        <option value="Cubierto">Cubierto</option>
        <option value="Descubierto">Descubierto</option>
        <option value="VIP">VIP</option>
      </select>
    );
  };
  
  export default SelectorZona;
  import { Provider } from "react-redux";
import { store } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
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
