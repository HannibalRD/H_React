import React from 'react'
import Card from './Card'
import  image1  from "../assets/image1.jpg";
import  image2  from "../assets/image2.jpg";
import  image3  from "../assets/image3.jpg";

const cards = [
{
    id:1,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},
{
    
    id:2,
    title:'Fazt Blog',
    image: image2,
    url: 'http://google.com'
},
{
    
    id:3,
    title:'Fazt Web',
    image: image3,
    url: 'http://google.com'
}
]


function Cards() {
    
return (
    // bg-info es para ver el contorno que ocupa donde esta puesto i lo cambia de color
    <div className='container d-flex justify-content-center align-items-center'> 
        <div className='row'>
            {
                cards.map((card,index) =>(
                    <div className='col-md-4' key={card.id}>
                        <Card 
                        title={card.title} 
                        image={card.image} 
                        url={card.url} 
                        text={card.text}
                        customClassName={`custom-card-${index}`}
                        />
                    </div>
                ))
            }
        </div>
    </div>
)
}

export default Cards