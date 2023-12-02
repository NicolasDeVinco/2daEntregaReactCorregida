import './ItemDetail.css'



export const ItemDetail = ({ usuarioSeleccionado }) => {

  return (
    <div className='detail__container--general'>
      <div className="detail__container">
        <div className='detalles__data--container'>
          <div className="detalles__data">
            <p className="detalles__item">Nombre:</p>
            <p className="detalles__item--respuesta">{usuarioSeleccionado.nombre}</p>
          </div>
          <div className="detalles__data">
            <p className="detalles__item">Posición:</p>
            <p className="detalles__item--respuesta">{usuarioSeleccionado.posicion}</p>
          </div>
          <div className="detalles__data">
            <p className="detalles__item">Precio:</p>
            <p className="detalles__item--respuesta"> {usuarioSeleccionado.precio}</p>
          </div>
          <div className="detalles__data">
            <p className="detalles__item">Pie:</p>
            <p className="detalles__item--respuesta">{usuarioSeleccionado.pie}</p>
          </div>
        </div>
        <div className='detalles__imagen--container'>
          <img src={`../../${usuarioSeleccionado.imagen}`} alt={usuarioSeleccionado.nombre} className="detalles__imagen" />
        </div>
      </div>
      <button className='detalles__button'>Agregar a mi equipo</button>
    </div>
  )
}
