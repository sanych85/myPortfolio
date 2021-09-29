import React from 'react';
import styled from 'styled-components';
import { Heading } from '.';
import { eductaionLink } from '../data/links';
import EducationItem from './commonComponents/EducationItem';

const Educations = () => {
  return (
    <Wrapper>
      <Heading type="h3" fontFamily=" Roboto">
        Education
      </Heading>
      <InnerWrapper>
        {eductaionLink.map((link) => {
          return (
            <EducationItemWrapper key={link.id}>
              <EducationItem {...link}  />
            </EducationItemWrapper>
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Educations;

const Wrapper = styled.section`
display: flex;
flex-direction: column;
  position: relative;
  width: 100%;
  background-color: #f8f8fc;
`;

const InnerWrapper = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0.5px;
    top: 5%;
    left: 50%;
    height: 90%;
    background-color: #81869b3e;
  }
`;

const EducationItemWrapper = styled.div `
  

`