import React from 'react';
import styled from 'styled-components';
import { AdvantageItem, Heading } from '.';
import { advantages } from '../data/advantages';
import { device } from './devices';

const WhyYouShouldHire = () => {
  return (
    
      <Wrapper id="advantages">
        <Heading type="h3" fontFamily="Roboto">
          Why you should hire me
        </Heading>
        <InnerWrapper>
          {advantages.map((advantage) => (
            <AdvantageItem key={advantage.id} {...advantage} />
          ))}
        </InnerWrapper> 
      </Wrapper>
 
  );
};



export default WhyYouShouldHire;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

`;
const InnerWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  padding: 0rem;
  @media ${device.laptopL} {
    width: 100%;
    padding: 0px;
  }

  /* align-items: center; */
`;
