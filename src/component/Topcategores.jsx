import React from 'react'
import "../component/flashdeal.css"
import { faBolt,faStar,faPlus,faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from "../images/discount/discount-1.png"
import img2 from "../images/discount/discount-2.png"
import img3 from "../images/discount/discount-3.png"
import img4 from "../images/discount/discount-4.png"
function Topcategores() {
  return (
    <div className='Flashdeal addx'>
      <div className='Flashdeal-head '> 
      <span><FontAwesomeIcon icon={faTag} /></span>
         <h3>Big Discounts</h3></div>
        <div className='Flashdealcard ones'>
      <div className='card'>
      <span className='cardspan' >-30%</span>
      <div className='img'>
            <img src={img1} alt=''/>
        </div>
        <div className='cardtext'>
            <p style={{fontWeight:"bold"}}>Benux 2022</p>
        </div>
        <div className='cost'>
            <span className='salary'>120$</span>
            <FontAwesomeIcon icon={faPlus} className='icons'/>

        </div>
      </div>
      <div className='card'>
      <span className='cardspan' >-80%</span>
      <div className='img'>
            <img src={img2} alt=''/>
        </div>
        <div className='cardtext'>
        <p style={{fontWeight:"bold"}}>Sony TV 1080p</p>

           
        </div>
        <div className='cost'>
            <span className='salary'>300$</span>
            <FontAwesomeIcon icon={faPlus} className='icons'/>

        </div>
      </div>
      <div className='card'>
      <span className='cardspan'>-40%</span>
      <div className='img'>
            <img src={img3} alt=''/>
        </div>
        <div className='cardtext'>
        <p style={{fontWeight:"bold"}}>Sony PS4</p>

            
        </div>
        <div className='cost'>
            <span className='salary'>440$</span>
            <FontAwesomeIcon icon={faPlus} className='icons'/>

        </div>
      </div>
      <div className='card'>
      <span className='cardspan' >-10%</span>
      <div className='img'>
            <img src={img4} alt=''/>
        </div>
        <div className='cardtext'>
        <p style={{fontWeight:"bold"}}>Setgearr 2022</p>
        </div>
        <div className='cost'>
            <span className='salary'>100$</span>
            <FontAwesomeIcon icon={faPlus} className='icons'/>

        </div>
      </div>
        </div>
    </div>
  )
}

export default Topcategores