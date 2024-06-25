import React from 'react'
function Footer() {
  return (
    <div className='Footer'>
             <div className='footer1'>
             <span className='name-search'  >.Store</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
              <div className='buttons'>              <button><i class="fa-brands fa-google-play"></i>Google Play</button>
              <button><i class="fa-brands fa-app-store"></i>App Store</button>
</div>
             </div>
             <div className='Footer1'>
             <h2>About Us</h2>
                <ul style={{listStyle:"none"}}>
                  <li>Careers</li>
                  <li>Our Stores</li>
                  <li> Our Cares</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
             </div>
             <div className='footer1'>
             <h2>Customer Care </h2>
                <ul style={{listStyle:"none"}}>
                  <li>  Returns & Refunds  </li>
                  <li>Help Center
                  </li>
                  <li> How to Buy
                  </li>
                  <li>Track Your Order
                  </li>
                  <li>Corporate & Bulk Purchasing
                  </li>
                </ul>
             </div>
             <div className='footer1'>
             <h2>Contact Us
             </h2>
                <ul style={{listStyle:"none"}}>
                 
                  <li> 70 Washington Square South, New York, NY 10012, United States
                  </li>
                  <li>Email: uilib.help@gmail.com
                  </li>
                  <li>Phone: +1 1123 456 780</li>
                  <li>Corporate & Bulk
                  <li>problem</li>
                  </li>
                </ul>
             </div>
    </div>
  )
}

export default Footer