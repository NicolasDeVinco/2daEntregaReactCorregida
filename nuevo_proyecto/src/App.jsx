import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemList } from './components/ItemListContainer/ItemList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { PaginaEnProgreso } from './components/ItemListContainer/Pagina-progeso'
import { Navbar } from './components/Navbar/Navbar'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer'

function App ( { handleShowUsuarios } ) {


    return (
      <Router>
        <Navbar handleShowUsuarios={handleShowUsuarios} />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/usuarios" element={<ItemList/>} />
          <Route path="/categoria/usuarios/:id" element={<ItemDetailContainer/>} />
          <Route path='/categoria/postulate' element={<PaginaEnProgreso /> }/>
        </Routes>
      </Router>
    )

 
}

export default App
