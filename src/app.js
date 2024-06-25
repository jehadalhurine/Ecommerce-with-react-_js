import React, {  useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import Cart from './pages/cart'
function App() {
const [data,setdata]=useState([]);
const addtocart=(card)=>{
setdata([...data,card]);



}

return (
    <div className='app'>
 
   <BrowserRouter  >
    <Routes>
     <Route path='/' element={<Home data={data} setdata={setdata} addtocart={addtocart} />} >
     </Route> 
     <Route path='/cart' element={<Cart  data={data} setdata={setdata} addtocart={addtocart} />} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App