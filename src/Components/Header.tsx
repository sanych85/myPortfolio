import React from 'react';
import styled from 'styled-components'

import { Navbar } from '.';

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
height: 100px;
width: 100%;

`


