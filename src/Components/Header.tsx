import React from 'react';
import { navigationLinks, socialLinks } from '../data/links';

import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledUl>
          {navigationLinks.map(({ name, link, id }) => {
            return (
              <StyledLi key = {id}>
                <StyledLink exact to = {link}>{name}</StyledLink>
              </StyledLi>
            );
          })}
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledUl = styled.ul `
display: flex;
justify-content: flex-end;
margin-right: 3rem;
`


const StyledLi = styled.li `
 list-style: none;
text-transform: uppercase;
 margin: 1rem;
 .active {
   color: green
 }
`

const StyledLink = styled(NavLink)`
text-decoration: none;
 
`

const StyledHeader = styled.header `
/* background-color: #d68080; */
height: 100px;
width: 100%;

`


