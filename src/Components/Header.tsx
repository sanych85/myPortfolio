import React from 'react';
import styled from 'styled-components'
import { Navbar } from '.';
import { device } from './devices';


const Header = () => {
  return (
    <StyledHeader>
        <Navbar/>
    </StyledHeader>
  );
};

export default Header;



const StyledHeader = styled.header `
/* background-color: #d68080; */
height: auto;
width: 100%;

@media ${device.tablet} {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
   
}
`



