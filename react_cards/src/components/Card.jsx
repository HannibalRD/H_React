import React from 'react'

function Card({title,image}) {
  return (
    <div className='card text-center bg-dark '>
      <img src={image} alt="null"/>
      <div className='card-body text-light'>
          <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secundary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio molestias hic tenetur non. Quo, voluptatibus. Dolor eveniet quibusdam, a quis iste saepe ducimus nesciunt fugiat ex, repudiandae rerum quo.</p>
            <a href="#" className='btn btn-outline-secondary '>
              Go to this web side
            </a>
      </div>
    </div>
  )
}

export default Card