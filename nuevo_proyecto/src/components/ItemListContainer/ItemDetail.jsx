import { InputCount } from './InputCount'
import './ItemDetail.css'
import { useState } from 'react'



export const ItemDetail = ({ usuarioSeleccionado, onAddToCart  }) => {
  
  const [count, setCount] = useState(0)
  

  const increment = () => {
    setCount(prev => prev + 1)
    onAddToCart(usuarioSeleccionado, count + 1)
    setInputType(false)
  }

  const [inputType, setInputType ] = useState(true)

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
      {inputType ? <button className='detalles__button' onClick={increment} >Agregar a mi equipo</button> 
      : <InputCount />}
      
    </div>
  )
}
