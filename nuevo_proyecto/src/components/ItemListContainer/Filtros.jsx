import './Filtros.css'
import { NavLink } from 'react-router-dom'

export const Filtros = ({onChangeFiltro}) => {

    const handleClick = (filtro) => {
        onChangeFiltro(filtro)
      }

  return (
    <div className="filtros__container">
        <NavLink to="/categoria/usuarios/hombre" className="filtros__item" onClick={() => handleClick("hombre")}>Hombre</NavLink>
        <NavLink to="/categoria/usuarios/mujer" className="filtros__item" onClick={() => handleClick("mujer")}>Mujer</NavLink>
        <select className="filtros__select" name="posicion" id="posicion" onChange={(e) => onChangeFiltro(e.target.value)}>
            <option value="Arquero">Arquero</option>
            <option value="Defensor">Defensor</option>
            <option value="Volante">Volante</option>
            <option value="Delantero">Delantero</option>
        </select>
    </div>
  )
}
