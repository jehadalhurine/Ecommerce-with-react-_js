import React from 'react'
import Head from './head'
import Search from './search'
import Categores from './categores'
import "../component/navbar.css"
function Navbar() {
  return (
    <div className='Navbar'>
    <Head/>
    <Search/>
    <Categores/>
  
    </div>
  )
}

export default Navbar