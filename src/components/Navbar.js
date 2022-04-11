import React from 'react';
import styled from 'styled-components';
import WeGame from '../assets/WeGame.png';
import {CgProfile} from 'react-icons/cg';
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import FullLogo from '../assets/FullLogo.png';
const Navbar = () => {
  return (
    <Nav>
        <a href ="" > <img className='Logo' src = {FullLogo} height='60' width='100%' ></img></a>
        
    <Menu>
      
        <MenuLink href ="" ><IoChatbubblesOutline size="23px" /></MenuLink>
        <MenuLink href ="" ><AiOutlineShoppingCart size="23px"/></MenuLink>
        <MenuLink href ="" ><AiOutlineHeart size="23px" /></MenuLink> 
        
        
          <Welcome> 
            
          <span>Bienvenue</span>
            <span>
            <strong>USER NAME</strong>
            </span>
            </Welcome> 
            
        <MenuLink href ="" > <CgProfile size="23px"/> </MenuLink>
        <MenuLink href ="" ><IoMdNotificationsOutline size="23px"/></MenuLink>
    </Menu>
   
    </Nav>
  )
}

const Nav = styled.div`
padding: 5px 2rem;
padding-top: 7px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
background: #FAFAFA;
border-bottom: 1px solid #A9A9A9;
`;

const Menu = styled.div`
display: flex;
cursor: pointer;


`;

const MenuLink = styled.div`
padding-top: 20px ;
padding-right: 20px ;
padding-left: 15px ;
padding-bottom: 10px ;
align-items: center;
position: right;

`;
const Welcome = styled.div`
display: flex;
flex-direction: column;
border-left: 1px solid 	#A9A9A9 ;
padding: 6px 17px;


`;


export default Navbar;
