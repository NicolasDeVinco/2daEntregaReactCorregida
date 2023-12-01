import './Filtros.css'


export const Filtros = ({onChangeFiltro}) => {

    const handleClick = (filtro) => {
        onChangeFiltro(filtro)
      }

  return (
    <div className="filtros__container">
        <p className="filtros__item" onClick={() => handleClick("hombre")}>Hombres</p>
        <p className="filtros__item" onClick={() => handleClick("mujer")}>Mujeres</p>
        <select className="filtros__select" name="posicion" id="posicion" onChange={(e) => onChangeFiltro(e.target.value)}>
            <option value="Arquero">Arquero</option>
            <option value="Defensor">Defensor</option>
            <option value="Volante">Volante</option>
            <option value="Delantero">Delantero</option>
        </select>
    </div>
  )
}
