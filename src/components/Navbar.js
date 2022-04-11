import React from 'react';
import './Navbar.css';
import WeGame from '../assets/WeGame.png';
import {CgProfile} from 'react-icons/cg';
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import FullLogo from '../assets/FullLogo.png';
const Navbar = () => {
  return (
    <div className="Nav">
        <a href ="" > <img className='Logo' src = {FullLogo} height='60' width='100%' ></img></a>
        
    <div className="Menu">
      
        <div className="MenuLink" href ="" ><IoChatbubblesOutline size="23px" /></div>
        <div className="MenuLink" href ="" ><AiOutlineShoppingCart size="23px"/></div>
        <div className="MenuLink" href ="" ><AiOutlineHeart size="23px" /></div> 
        
        
          <div className="Welcome"> 
            
          <span>Bienvenue</span>
            <span>
            <strong>USER NAME</strong>
            </span>
            </div> 
            
        <div className="MenuLink" href ="" > <CgProfile size="23px"/> </div>
        <div className="MenuLink" href ="" ><IoMdNotificationsOutline size="23px"/></div>
    </div>
   
    </div>
  )
}




export default Navbar;
