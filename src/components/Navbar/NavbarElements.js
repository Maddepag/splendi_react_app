import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
 background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
 height: 80px;
 background-color: #000;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1.2rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
 }
`;

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding 0 24px;
 max-width: 1100px;

`;

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    font-weight: bold;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    margin: 0 auto;
`;

export const MobileIcon = styled.div`
 display: none;

 @media screen and (max-width: 768px) {
     color: #fff;
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
 }
`;

export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 @media screen and (max-width: 768px) {
     display: none;
 }
`;

export const NavItem = styled.li`
 height: 80px;
 
`;

export const NavLinks = styled(LinkRouter)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active {
     border-bottom: 3px solid #4aa4f7;
 }
`;

export const NavLinksOut = styled.a`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 text-decoration: none;

 &.active {
     border-bottom: 3px solid #4aa4f7;
 }
`;



