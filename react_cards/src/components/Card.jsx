import React from 'react'
import  PropTypes  from "prop-types";
import './cards.css'
function Card({title,image,url,text,customClassName}) {
  return (
    <div className={`card text-center bg-dark animate__animated animate__fadeInUp ${customClassName}`}>
      <div className='overflow'>
        <img src={image} alt="null" className='card-img-top '/>
      </div>
      <div className='card-body text-light'>
          <h4 className='card-title'>{title}</h4>
          
            <p className='card-text text-secundary'>{
            text ? text:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio molestias hic tenetur non. Quo, voluptatibus. Dolor eveniet quibusdam, a quis iste saepe ducimus nesciunt fugiat ex, repudiandae rerum quo."
            }</p>
            <a href={url} className='btn btn-outline-secondary' target="_blank" rel='noreferrer'>
              Go to this web side
            </a>
      </div>
    </div>
  )
}
// text ? text de mas arriba sirve para que si existe la propiedad texto la priorice sino muestra lo que esta dentro de la <p></p>
Card.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  customClassName: PropTypes.string

}


export default Card