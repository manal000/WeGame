import React from 'react';

import FullLogo from '../assets/FullLogo.png';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { keyframes } from 'styled-components';
import './Footer.css';


const footer = () => {
  return (
    <div className='Footer gradient-background'>   
    
     <a href ="" > <img className='FullLogo' src = {FullLogo}  ></img> 
     </a>
     <div className='copy'> <span>All right reserved</span> </div>
    
    <div className='MenuF'>  
        <div className='MenuFLink' href ="" >About</div>
        <div className='MenuFLink' href ="" >Shop</div>
        <div className='MenuFLink'href ="" >Services</div> 
        <div className='MenuFLink'href ="" >Contact</div>
       
        
    </div>
<div className='Section' >
<BsFacebook  />
</div> 
<div className='Insta'>
<BsInstagram />
</div>
    </div>
    
  )
}


export default footer;
