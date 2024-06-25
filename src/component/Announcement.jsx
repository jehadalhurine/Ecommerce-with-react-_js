import React from 'react'
import  '../component/Announcement.css'
import imgs1 from "../images/SlideCard/slide-3.png"
function Announcement() {
  
  return (
    <div className='announc'>
    <div className='announc-text'>
      <h1>50% off For YOUR FIRST Shopping</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minima, ex maiores laudantium dolorum doloribus dignissimos voluptatibus quam numquam nihil dolore fuga sit. Dicta a animi magni. Deleniti, harum sapiente!</p>
      <button className='announc-button'>Visit Collections</button>
    </div>
    <div className='announc-img'>
      <img src={imgs1} alt=''/>
    </div>
  </div>
  )
}

export default Announcement