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
