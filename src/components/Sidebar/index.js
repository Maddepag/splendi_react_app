import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu> 
                <SidebarLink to="/about" onClick={toggle} >about</SidebarLink>
                <SidebarLink to="/shows" onClick={toggle} >shows</SidebarLink>
                <SidebarLink to="/merch" onClick={toggle} >merch</SidebarLink>
                <SidebarLink to="/music" onClick={toggle} >music</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar