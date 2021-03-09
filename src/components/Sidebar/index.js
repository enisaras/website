import React from 'react'
import Toggle from '../theme/Toggler'
import {SidebarContainer, Icon, CloseIcon,
SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu} from 
'./SidebarElements'
const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/website' onClick = {toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/about" onClick = {toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/education" onClick = {toggle}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="/skills" onClick = {toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="/contact" onClick = {toggle}>
                        Contact
                    </SidebarLink>
                    <SidebarLink to="/resume" onClick = {toggle}>
                        Resume
                    </SidebarLink>
                    
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
