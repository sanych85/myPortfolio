import React from 'react';
import styled from 'styled-components';
import { CopyRight, Navbar, SocialLinks } from '.';



const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Navbar type = 'footerNavbar' />
        <CopyRight />
        <SocialLinks />
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f4fffff2;
  padding-top:1rem ;
  padding-bottom: 1rem;

`;

const Wrapper = styled.section`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
  
`;
