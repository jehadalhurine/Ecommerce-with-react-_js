import React from 'react'
import "../pages/Home.css"
import Navbar from '../component/navbar'
import Announcement from '../component/Announcement'
import Flashdeal from '../component/Flashdeal'
import Topcategores from '../component/Topcategores'
import Discounting from '../component/Discounting'
import Footer from '../component/Footer'
 export const  Home=({data,setdata,addtocart})=> {
  return (
    <div className='Home-page'>
  <Navbar/> 
  <Announcement/>
  <Flashdeal  data={data} setdata={setdata} addtocart={addtocart} />
  <Topcategores/>
  <Discounting/>
  <Footer/>
    </div>
  )
}

