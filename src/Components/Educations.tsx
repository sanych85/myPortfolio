import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Heading } from '.';
import  {ShowAnimation} from "./commonComponents/Animations"
import { eductaionLink } from '../data/links';
import EducationItem from './commonComponents/EducationItem';
import { device } from './devices';
import LazyLoad from 'react-lazyload';

const Educations = () => {
  return (
    <LazyLoad height={-100} offset={0}>
      <Wrapper id="education">
        <Heading type="h3" fontFamily=" Roboto">
          Education
        </Heading>
        <InnerWrapper>
          {eductaionLink.map((link) => {
            return (
              <EducationItemWrapper key={link.id}>
                <EducationItem {...link} />
              </EducationItemWrapper>
            );
          })}
        </InnerWrapper>
      </Wrapper>
    </LazyLoad>
  );
};

export const ShowAnimationnn = keyframes `

0% {
  opacity:0;
  transform: translateY(300px);
}
5% {
  opacity:0;
  transform: translateY(100px);
}

100% {
  opacity:1;
  transform: translateY(0px);
}

`

export default Educations;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: #f8f8fc;
  animation-name: ${ShowAnimation};
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  margin: 2rem 0;
  &:before {
    content: '';
    position: absolute;
    width: 0.5px;
    top: 5%;
    left: 50%;
    height: 90%;
    background-color: #81869b3e;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const EducationItemWrapper = styled.div``;
