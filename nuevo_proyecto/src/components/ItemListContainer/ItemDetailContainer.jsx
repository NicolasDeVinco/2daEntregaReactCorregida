import { ItemDetail } from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { Titulos } from "./Titulos"
import { useEffect, useState } from "react"
import usuarios from '../../usuarios.json'


export const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams()
  const [usuario, setUsuario] = useState([])

  useEffect( () => {
    setUsuario(usuarios.filter((usuario) => usuario.id === Number(id))[0])
  }, [id])


  return (
    <>
        <Titulos titulo="DETALLES"/>
        <ItemDetail usuarioSeleccionado={usuario} onAddToCart={addToCart}/>
    </>
    )
}
