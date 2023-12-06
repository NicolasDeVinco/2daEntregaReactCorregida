import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemList } from './components/ItemListContainer/ItemList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { PaginaEnProgreso } from './components/ItemListContainer/Pagina-progeso'
import { Navbar } from './components/Navbar/Navbar'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer'
import { useState } from 'react'
import { Counter } from './components/Navbar/Counter'
import { CartContainer } from './components/ItemListContainer/CartContainer'



function App ( { handleShowUsuarios } ) {

  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])


  const addToCart = (item, quantity) => {
    const isUserInCart = cartItems.some(cartItem => cartItem.item.id === item.id)

    if (isUserInCart) {
      alert("Este usuario ya está en tu equipo")
    } 
    else {
        if (cartItems.length < 11) {
          setCartItems([...cartItems, { item }])
          setCount(prevCount => prevCount + quantity)
        } 
        else {
          alert("Solo puedes agregar 11 jugadores")
        }
    }
  }

    return (
      <Router>
        <Navbar handleShowUsuarios={handleShowUsuarios} />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/usuarios" element={<ItemList/>} />
          <Route path="/categoria/usuarios/:genero" element={<ItemList />} />
          <Route path="/categoria/usuarios/:id" element={<ItemDetailContainer setCount={setCount} addToCart={addToCart}/>} />
          <Route path="/categoria/usuarios/:genero/:id" element={<ItemDetailContainer setCount={setCount} addToCart={addToCart}/>} />
          <Route path='/categoria/postulate' element={<PaginaEnProgreso /> }/>
          <Route path='/equipo' element={<CartContainer cartItems={cartItems} setCartItems={setCartItems} setCount={setCount}/> }/>
        </Routes>
        <Counter count={count} />
      </Router>
    )

 
}

export default App
 