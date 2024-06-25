import React  from 'react';
import "../component/flashdeal.css";
import { faBolt, faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from "../images/flash/flash-1.png";
import img2 from "../images/flash/flash-2.png";
import img3 from "../images/flash/flash-3.png";
import img4 from "../images/flash/flash-4.png";
function Flashdeal({data,setdata,addtocart}) {

  

  const flashdealData = [
    { img: img1, name: "Shoes", salary: 200 },
    { img: img2, name: "Watch", salary: 300 },
    { img: img3, name: "Smart Mobile Black", salary: 100},
    { img: img4, name: "Smart Watch Black", salary: 800 }
  ];

  return (
  
    <div className='Flashdeal'>
      <div className='Flashdeal-head'>
        <span><FontAwesomeIcon icon={faBolt} /></span>
        <h3>Flash Deals</h3>
      </div>
      <div className='Flashdealcard'>
        {flashdealData.map((card, index) => (
          <div className='card' key={index}>
            <div className='img'>
              <img src={card.img} alt={card.name} />
            </div>
            <div className='cardtext'>
              <p>{card.name}</p>
              <span className='spantext'><FontAwesomeIcon icon={faStar} /></span>
              <span className='spantext'><FontAwesomeIcon icon={faStar} /></span>
              <span className='spantext'><FontAwesomeIcon icon={faStar} /></span>
              <span className='spantext'><FontAwesomeIcon icon={faStar} /></span>
              <span className='spantext'><FontAwesomeIcon icon={faStar} /></span>
            </div>
            <div className='cost'>
              <span className='salary'>{card.salary}</span>
              <FontAwesomeIcon icon={faPlus} className='icons' onClick={() => addtocart(card)} />
            </div>
          </div>
        ))}
      </div>
     
    </div>
    
  );
}

export default Flashdeal;
