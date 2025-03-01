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
