import React from 'react'
import Card from './Card'
import  image1  from "../assets/image1.jpg";
import  image2  from "../assets/image2.jpg";
import  image3  from "../assets/image3.jpg";

const cards = [
{
    id:1,
    title:'Fazt Web',
    image: image1
},
{
    
    id:2,
    title:'Fazt Blog',
    image: image2
},
{
    
    id:3,
    title:'Fazt Web',
    image: image3
}
]


function Cards() {
  return (
    // bg-info es para ver el contorno que ocupa donde esta puesto i lo cambia de color
    <div className='container d-flex justify-content-center h-100 align-items-center'> 
        <div className='row'>
            {
                cards.map(card =>(
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} image={card.image}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards