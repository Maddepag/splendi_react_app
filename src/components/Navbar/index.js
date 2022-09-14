import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksOut} from './NavbarElements';
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
                 <img src={require('../../images/splendi_web.svg').default} 
                 style={{ padding: '0px', height: '150px', width: '150px', overflow: 'none' }}  />
                
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinksOut href="https://linktr.ee/splendiii" 
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            target='_blank'
                            >music</NavLinksOut>
                </NavItem>
                <NavItem>
                    <NavLinksOut href="https://www.youtube.com/channel/UC2Oq_9x0zTMMxqWnWrW3EcQ" 
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            target='_blank'
                            >videos</NavLinksOut>
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
            </NavMenu>
            

          </NavbarContainer>
          
        </Nav>
      </IconContext.Provider>
    </>
  )
};

export default Navbar;
