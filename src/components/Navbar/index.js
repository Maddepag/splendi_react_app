import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
          <NavbarContainer>
            <NavLogo to="/" > 
                 <img src={require('../../images/splendi_web.svg').default} style={{ height: '300px', width: '300px' }}  />
                
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">about</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="tour">tour</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="merch">merch</NavLinks>
                </NavItem>
            </NavMenu>
            

          </NavbarContainer>
          
        </Nav>
          
    </>
  )
}

export default Navbar;
