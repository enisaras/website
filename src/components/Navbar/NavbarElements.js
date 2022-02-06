import { FaBars } from 'react-icons/fa';
import { NavLink as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1.2rem;
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;


export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavbarContainer = styled.div`
  display:flex;
  color: #fff;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width:100%;
  padding 0 24px;
  max-width: 1100px;
  }
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  padding-top: 25px;
  font-size: 1.5rem;
  display: flex;
  aligh-items: center;
  margin-left: -275px;
  margin-right: -75px;
    font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -175px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    display: none;
  }
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 200px;
  margin-right: -200px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;