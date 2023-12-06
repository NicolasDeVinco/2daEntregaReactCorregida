import { NavLink } from 'react-router-dom'
import './CartContainer.css'
import { Titulos } from './Titulos'
import { useState, useEffect } from 'react'

export const CartContainer = ({ cartItems, setCartItems, setCount  }) => {
    const [precioFinal, setPrecioFinal] = useState(0)

    useEffect(() => {
        let total = 0
    
        for (const cartItem of cartItems) {
          total += cartItem.item.precio
        }
    
        setPrecioFinal(total)
      }, [cartItems])


      const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems]
        updatedCart.splice(index, 1)
        setCartItems(updatedCart)
        setCount(prevCount => prevCount - 1)
      }

      const handleEmptyCart = () => {
        setCartItems([])
        setCount(0)
      }

      const handleBuyCart = () => {
        setCartItems([])
        setCount(0)
        alert("Gracias por tu compra")
      }

    return (
    
        <div className='cart__container--general'>
            <Titulos titulo="MI EQUIPO" />     
            <div className='cart__container--info'>
                <div className='cart__info--jugadores'>
                    <ul>
                    {cartItems.map((cartItem, index) => (
                        <li key={index}>
                        {cartItem.item.nombre} - Posicion: {cartItem.item.posicion} - Precio: {cartItem.item.precio} <img className="equis__img" src="../src/images/cerca.png" alt="imagen equis" onClick={() => handleRemoveItem(index)} />
                        </li>
                    ))}
                    </ul>
                </div>
                <div className='cart__info--precio'>Precio final:  ${precioFinal}</div>
                <div className='cart__info--button'>
                    <NavLink to='/'> <button className='cart__button' onClick={handleBuyCart}>Comprar equipo</button> </NavLink>
                    <button className='cart__button' onClick={handleEmptyCart}>Vaciar equipo</button>
                </div>
            </div>
        </div>
    )
  }