import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <img src={require('../../images/splendi_logo_convert.svg').default} 
              heigth={100} width={100}/>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/about" activeStyle>
                  about
              </NavLink>
              <NavLink to="/tour" activeStyle>
                  tour
              </NavLink>
              <NavLink to="/merch" activeStyle>
                  merch
              </NavLink>
          </NavMenu>
          
          </Nav>
          
    </>
  )
}

export default Navbar;
