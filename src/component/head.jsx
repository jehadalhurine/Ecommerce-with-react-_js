import React from 'react'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Head() {
  return (
    <div className='Head'>
     <div className='head-right'>
     <p> <span><FontAwesomeIcon icon={faPhone} /> </span>   +88012 3457 7894</p> 
     <p> <span><FontAwesomeIcon icon={faEnvelope}  /></span> example@gamil.com</p>
     </div>
    <div className='head-left'>
        <ul>
            <li>Theme FAQ's</li>
            <li>Need Helps</li>
            <li>EN</li>
            <li>$USD</li>

        </ul>
    </div>
    </div>
  )
}

export default Head