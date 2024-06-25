import React, { useRef } from 'react'
import { faUser,faCartShopping,faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate,Link } from 'react-router-dom'

function Search() {
  const navigate=useNavigate();
  const z=useRef();
const changecolor=()=>{
    if(z.current.className==="active"){
        z.current.className="";
    }
    else{
        z.current.className="active";

    }

}
  return (
    <div className='Search'>
        <span className='name-search' onClick={()=>{navigate("/")}} >.Store</span>
        <input placeholder='Search and hit enter...'/>
       <div className='search-left'>
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} style={{color:"black"}}/></Link>
        <span  style={{cursor:"pointer"}} ref={z}  onClick={changecolor}><FontAwesomeIcon icon={faSun}  /></span>
       </div> 

    </div>
  )
}

export default Search