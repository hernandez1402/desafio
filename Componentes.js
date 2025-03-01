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
