import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLinks,
  Bars,
  NavMenu,
  MobileIcon,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle } ) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to = "/">Suheyl Enis Aras</NavLogo>
          <MobileIcon onClick = { toggle }>
            <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to= "/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to= "/education">Education</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to= "/skills">Skills</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to= "/contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to = "/resume">Resume</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;