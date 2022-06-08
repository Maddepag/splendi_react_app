import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)

    }else{
      setScrollNav(false) 
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}> 
                 <img src={require('../../images/splendi_web.svg').default} style={{ height: '300px', width: '300px' }}  />
                
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/about" 
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >about</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/shows" 
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >shows</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/merch"
                          smooth={true}
                          duration={500} 
                          spy={true} 
                          exact='true' 
                          offset={-80}
                          >merch</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/music"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>music</NavLinks>
                </NavItem>
            </NavMenu>
            

          </NavbarContainer>
          
        </Nav>
      </IconContext.Provider>
    </>
  )
};

export default Navbar;
