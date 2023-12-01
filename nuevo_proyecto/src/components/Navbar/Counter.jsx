import './Counter.css'

export const Counter = ({ cartCount }) => {

  return (
    <div className="counter__container">
        <p className='counter__item'>{cartCount}</p>
    </div>
  )
}
