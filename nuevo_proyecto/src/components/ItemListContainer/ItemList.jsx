import { useEffect, useState } from "react"
import './ItemList.css'
import { Filtros } from "./Filtros"
import { Titulos } from "./Titulos"
import { Link } from "react-router-dom"


export const ItemList = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [filtro, setFiltro] = useState("")


    useEffect( () => {
        fetch('../src/usuarios.json')
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.error(error))
       
    }, [])


    const handleChangeFiltro = (filtro) => {
        setFiltro(filtro)
      }
    
      const usuariosFiltrados = usuarios.filter((usuario) => {
        if (filtro === "hombre" || filtro === "mujer") {
          return usuario.genero === filtro
        } else {
          return filtro === "" || usuario.posicion === filtro
        }
      })

  
    return (

        <div className="usuarios__general">
            <Titulos titulo="ELEGÍ TU EQUIPO"/>
            <Filtros onChangeFiltro={handleChangeFiltro}/>
            <div className="usuarios__container">
            {usuariosFiltrados.map((usuario) => (
                    <div key={usuario.id} className="usuario__card--container">
                        <h1 className="usuario__card--nombre">{usuario.nombre}</h1>
                        <img src={usuario.imagen} className="usuario__card--img" alt={usuario.nombre}/>
                        <p>Precio: ${usuario.precio}</p>
                        <p>Posición: {usuario.posicion}</p>
                        <Link to={`/categoria/usuarios/${usuario.id}`}  className="usuario__card--button">Ver más</Link>
                    </div>
                ))
            }
            </div>
        </div>   
    )
}