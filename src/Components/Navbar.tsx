import { useState } from 'react';
import { navigationLinks } from '../data/links';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from './devices';

interface NavbarProps {
  type?: 'footerNavbar';
}

interface ToggleProps {
  isToggle?: boolean;
  type?: 'footerNavbar';
}

const Navbar: React.FC<NavbarProps> = ({ type }) => {
  const [isToggle, setToggle] = useState(false);
  console.log(isToggle);
  const displayMenu = () => {
    setToggle(prev=>!prev);
  };
  console.log(type, 'type');
  return (
    <>
      {type !== 'footerNavbar' && (
        <Toggle onClick={displayMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Toggle>
      )}

      <StyledNavbar type={type} isToggle={isToggle}>
        <StyledUl isToggle={isToggle}>
          {navigationLinks.map(({ name, link, id }) => {
            return (
              <StyledLi key={id}>
                <StyledLink exact to={link}>
                  {name}
                </StyledLink>
              </StyledLi>
            );
          })}
        </StyledUl>
      </StyledNavbar>
    </>
  );
};

export default Navbar;



const StyledNavbar = styled.nav<ToggleProps>`

  animation-fill-mode: backwards;
  @media ${device.tablet} {
    display: ${({ isToggle }) => (isToggle ? 'flex' : 'none')};
    height: ${({ type }) => type !== 'footerNavbar' && '100vh'};
    width: 100vw;
    justify-content: center;
    flex-direction: ${({ type }) => (type === 'footerNavbar' ? 'column' : '')};
    background-color: #5877b9;
    z-index: 99;
    

    /* position: fixed; */
  }
`;

const StyledUl = styled.ul <ToggleProps>`
  display: flex;
  justify-content: ${({isToggle})=>isToggle?"center":"flex-end"};
  margin-right: 3rem;
  margin-top: ${({isToggle})=>isToggle?"30px":"0rem"};
  @media ${device.tablet} {
    /* min-height: ${({isToggle})=>isToggle && "calc(100vh - 70px)"}; */
    flex-direction: column;
    margin: 0rem;
    padding: 0px;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  text-transform: uppercase;
  margin: 1rem;
  .active {
    color: #d16464;
    text-decoration: underline;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Love Ya Like A Sister', 'sans-serif';
  font-size: 20px;
  
  /* transition: all 0.8s ease; */
  position: relative;
  @media ${device.tablet} {
    font-size: 26px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -5px;
    width: 0px;
    height: 1px;
    background-color: black;
    transition: all 0.4s ease;
  }
  &:hover {
    color: #abe6de;
  }
  &:hover:before {
    width: 100%;
    bottom: -5px;
  }
`;

const Toggle = styled.div<ToggleProps>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  @media ${device.tablet} {
    display: ${({ isToggle }) => (isToggle ? 'none' : 'flex')};
  }

  div {
    height: 1px;
    width: 30px;
    background-color: black;
    margin: 4px;
  }
`;
