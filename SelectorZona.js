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
