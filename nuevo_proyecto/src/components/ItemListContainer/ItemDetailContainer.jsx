import { ItemDetail } from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { Titulos } from "./Titulos"



export const ItemDetailContainer = () => {
  const { id } = useParams()
  
  


  return (
    <>
        <Titulos titulo="DETALLES"/>
        <ItemDetail />
    </>
    )
}
