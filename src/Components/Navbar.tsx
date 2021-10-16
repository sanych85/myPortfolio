import { useState, useEffect } from 'react';
import { navigationLinks } from '../data/links';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from './devices';
import { HashLink  } from 'react-router-hash-link';

interface NavbarProps {
  type?: 'footerNavbar';
}

interface ToggleProps {
  isToggle?: boolean;
  type?: 'footerNavbar';
}

const Navbar: React.FC<NavbarProps> = ({ type }) => {
//   const history = useHistory()
//   useEffect(() => {
//     const hash = history.location.hash
//     // Check if there is a hash and if an element with that id exists
//     const el = hash && document.getElementById(hash.substr(1))
//     if (el) {    
//         el.scrollIntoView({behavior: "smooth"})
//     }
// }, [history.location.hash]) // Fires every time hash changes
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
          <ToggleElem isToggle  = {isToggle}></ToggleElem>
          <ToggleElem isToggle  = {isToggle}></ToggleElem>
          <ToggleElem isToggle  = {isToggle}></ToggleElem>
        </Toggle>
      )}

      <StyledNavbar type={type} isToggle={isToggle}>
        <StyledUl isToggle={isToggle}>
          {navigationLinks.map(({ name, link, id }) => {
            return (
              <StyledLi key={id}>
                <StyledLink  to={link}>
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

const toggleAnimationTo = keyframes`
0% {
  width:0px
  display: none;
  transform: translateX(-100vw) 


}
1% {

  display: flex;
  width:0px
  
}

100% {

  width:100vw
  transform: translateX(100vw) 
}
`



const StyledNavbar = styled.nav<ToggleProps>`
  transition: all 0.5s ease;
  @media ${device.tablet} {
    transition: all 1s ease;
    /* animation-name: ${toggleAnimationTo};
    animation-duration: 1s;
    animation-fill-mode: forwards; */
    position: ${({ isToggle }) => (isToggle ? 'static' : 'absolute')};
    
    top:0px;
    /* left:-500px; */

    transform: ${({ isToggle }) => (isToggle ? 'translateX(0vw)' : 'translateX(-100vw) ')};
    /* display: ${({ isToggle }) => (isToggle ? 'flex' : 'none')}; */
    height: ${({ type }) => type !== 'footerNavbar' && '100vh'};
    width: 100vw;
    justify-content: center;
   
    flex-direction: ${({ type }) => (type === 'footerNavbar' ? 'column' : '')};
    background-image: linear-gradient(to top right, rgb(224, 222, 166), rgb(224, 214, 168), rgb(224, 206, 170), rgb(224, 198, 172), rgb(224, 190, 174), rgb(224, 182, 176), rgb(224, 174, 178), rgb(224, 166, 180), rgb(224, 158, 182), rgb(224, 150, 184), rgb(224, 142, 186), rgb(224, 134, 188));
    z-index: 99;
    /* transform:${({ isToggle }) => (isToggle ? 'flex' : 'none')}; */
    

    /* position: fixed; */
  }
`;

const StyledUl = styled.ul <ToggleProps>`
  display: flex;
  justify-content:center;
  margin-right: 3rem;
  align-items: center;
  
  margin-top: ${({isToggle})=>isToggle?"30px":"0rem"};
  @media ${device.tablet} {
    /* min-height: ${({isToggle})=>isToggle && "calc(100vh - 70px)"}; */
    flex-direction: column;
    margin: 0rem;
    padding: 0px;
    min-height: 100vh;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  text-transform: uppercase;
  margin: 1rem;
  /* .active {
    color: #d16464;
    text-decoration: underline;
  } */
`;

const StyledLink = styled(HashLink)` 
  position: relative;
  text-decoration: none;
  font-family: 'Love Ya Like A Sister', 'sans-serif';
  font-size: 20px;
  color:black;
  transition: all 0.4s ease;
  /* transition: all 0.8s ease; */
  
  @media ${device.tablet} {
    font-size: 26px;
  }
  &:before, &:after {
    content: "";
    transition: all 1s ease;
    opacity: 0;
  }
  &:before {
    left: -10px;
   
  }
  &:before {
    right: -22px;
  }
  /* &:before {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -5px;
    width: 0px;
    height: 1px;
    background-color: black;
    transition: all 0.4s ease;
  } */
  &:hover {
    transition: all 1s ease;
    color: #925858;
  }
  &:hover:before, &:hover:after {
    transition: all 1s ease;
   position: absolute;
    
   width: 20px;
   height: 20px;
   opacity: 1;
  }
  &:hover:before {
    
    content: "<";
    left: -10px;
  }
  &:hover:after {
  
    content: "/>";
   right: -22px;

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
  transition: all 0.4s ease;
  @media ${device.tablet} {
    display: ${({ isToggle }) => (isToggle ? 'none' : 'flex')};
  }

`;

const ToggleElem =styled.span<ToggleProps>`
    height: 1px;
    width: 30px;
    background-color: black;
    margin: 4px;
    background-color: blue;
    position: relative;
    transition: all 0.4s ease;
    &:nth-child(1) {
      transform: ${({isToggle})=> isToggle && "rotate(-45deg)"};
      left:${({isToggle})=> isToggle && "0px"};
      top:${({isToggle})=> isToggle && "5px"};
    }
    &:nth-child(2) {
      display: ${({isToggle})=> isToggle && "none"};
    }
    &:nth-child(3) {
      transform: ${({isToggle})=> isToggle && "rotate(45deg)"};
      left:${({isToggle})=> isToggle && "0px"};
      top:${({isToggle})=> isToggle && "-5px"};
    }
    
    
`
