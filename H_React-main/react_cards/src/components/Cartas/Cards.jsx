import React,{useState} from 'react'
import Card from '../Carta/Card.jsx'
import  image1  from "../../assets/image1.jpg";
import  image2  from "../../assets/image2.jpg";
import  image3  from "../../assets/image3.jpg";

const cards = [
{
    id:1,
    title:'Fazt Web',
    image: image2,
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
    image: image2,
    url: 'http://google.com'
},{
    id:4,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:5,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:6,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:7,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:8,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:9,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:10,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:11,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:12,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},{
    id:13,
    title:'Fazt Web',
    image: image1,
    url: 'http://google.com'

},
{
  id:14,
  title:'Fazt Web',
  image: image1,
  url: 'http://google.com'

},{
  id:15,
  title:'Fazt Web',
  image: image1,
  url: 'http://google.com'

},
]
const itemsPerPage = 12;
function Cards() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > cards.length) {
    endIndex = cards.length;
  }

  const currentPageData = cards.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center cards-container'>
        <div className='row'>
          {currentPageData.map((card, index) => (
            <div className='col-3 custom-card' key={card.id}>
              <Card
                title={card.title}
                image={card.image}
                url={card.url}
                text={card.text}
                customClassName={`custom-card-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      <button className='mt-5 mb-5' onClick={goToPrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button className='mt-5 mb-5' onClick={goToNextPage} disabled={currentPage * itemsPerPage >= cards.length}>
        Siguiente
      </button>
      </div>
    </>
  );
}

export default Cards;