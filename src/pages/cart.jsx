import React, { useEffect, useRef, useState } from 'react'
import Head from '../component/head'
import Search from '../component/search'
import Categores from "../component/categores"
import Footer from '../component/Footer'
import "../pages/cart.css"
import img1 from "../images/flash/flash-1.png";
import img2 from "../images/flash/flash-2.png";
import img3 from "../images/flash/flash-3.png";
import img4 from "../images/flash/flash-4.png";
function Cart(props){
  const showcard=useRef();
  var salares=0;
 const [use,nonuse]=useState(true);

const [send,setsend]=useState(0);
    function showtotal(){
      if(props.data.length>0){
        for(let x=0;x< props.data.length;x++){
          salares+= props.data[x].salary;
          setsend(salares);
        }
      }
      else{
        nonuse(false);
      }
     

    }
 return  (
    <div className='cart'>
   <Head/>
   <Search/>
   <Categores/>
   <div className='my card'>
    {props.data.map((elements,index)=>(
    <div className='show'>
      <img src={elements.img} alt=''/>
        <div className='showtext'>
          <p>{elements.name}</p>
          <p>{elements.salary}</p>
        </div>
      </div> 
    ))}
   
    </div>
    <hr style={{fontSize:"40px"}}/>
    <div className='costing'>
      <span>Cart summery</span>
     
      <div className='costnumber'>
      <button onClick={()=>{showtotal()}} className='btnclicked'>  Show Total Price  </button>
  <p>{use?send:"No item Added"}</p>      
      </div>
   </div>
   <Footer/>
    </div>
  )
}

export default Cart;