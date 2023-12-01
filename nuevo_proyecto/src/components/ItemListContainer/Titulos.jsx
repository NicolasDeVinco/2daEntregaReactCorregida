import './Titulos.css'

export const Titulos = (props) => {
    return (
        <div className="titulos__container">
            <h1 className="titulo__item">{props.titulo}</h1>
        </div>
    )
}