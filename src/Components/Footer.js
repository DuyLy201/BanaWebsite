import React from 'react'
import "./Footer.css"
import myImage from "../Assets/Images/quanthanhtho.png";

function Footer() {
  return (
    <div className='footer'>
        <h1>Liên hệ</h1>
        <div class="flex-container">
          <div style={{flex:1}}>
            <p style={{fontWeight:"bold", fontSize:"20px"}}>Assoc. Prof. Quan Thanh Tho</p>
            <p style={{fontSize:"18px"}}>
              Dean, Faculty of Computer Science and Engineering
            </p>
            <p style={{fontSize:"18px"}}>
              Ho Chi Minh City University of Technology      
            </p>
            <p>Tel: (84-8) 8 647256 (Ext. 5839)</p>
            <p>Email: qttho@hcmut.edu.vn | qttho2011@gmail.com</p>
          </div>
          <div style={{flex:1}}>
            <img src={myImage}  alt="Assoc. Prof. Quan Thanh Tho" style={{width:"220px", height:"180px"}}/>
          </div>
        </div>
    </div>
  )
}

export default Footer