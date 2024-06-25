import React from 'react'
import { faUser,faCartShopping,faSun,faBorderAll,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Categores() {
  return (
    <div className='Categores'>
<div className='logo-categories'>
<FontAwesomeIcon icon={faBorderAll}/>
        <span> Categories</span>
            <FontAwesomeIcon icon={faChevronCircleDown}/>


</div>
<div className='text-categories'>
    <ul style={{color:"black",cursor:"pointer",}}>
        <li>Home</li>
        <li>Pages</li>
        <li>User Account</li>
        <li>Vendor Account</li>
        <li>Track My Order</li>
        <li>Contact</li>


    </ul>
</div>
    </div>
  )
}

export default Categores