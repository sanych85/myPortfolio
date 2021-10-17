import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Heading } from '.';
import  {ShowAnimation} from "./commonComponents/Animations"
import { device } from './devices';
import LazyLoad from 'react-lazyload';

interface Advantages {
  name: string;
  description: string;
  svg: JSX.Element;
}

const AdvantageItem: React.FC<Advantages> = ({ name, description, svg }) => {
  return (
    <LazyLoad height={-100} offset={0}> 
      <Li>
        <SvgWrapper>{svg}</SvgWrapper>
        <CardWrapper>
          <Heading type="h4" color="#8d7635">
            {name}
          </Heading>
          <Description>{description}</Description>
        </CardWrapper>
      </Li>
    </LazyLoad>
  );
};





export default AdvantageItem;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  margin: 2rem 4.5rem;
  background-color: #287bff45;
  border-radius: 1rem;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  position: relative;
  overflow: hidden;
  animation-name: ${ShowAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @media ${device.laptop} {
    margin: 1rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -115px;
    width: 100%;
    height: 150%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    transform: rotate(37deg);
    pointer-events: none;
    filter: blur(5px);
  }

  &:hover:before {
    background: linear-gradient(90deg, transparent, rgba(191, 194, 241, 0.3));
    cursor: pointer;
  }

  svg {
    width: 45px;
    height: 45px;
  }
  /* border: 1px solid #000; */
`;
const SvgWrapper = styled.div`
  display: flex;
  width: 78px;
  height: 56px;
  background-color: #f4ece9;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  justify-content: center;
  box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1);
  inset: 0 -8px 0 rgba(255, 255, 255, 0.25), 0 45px 0 rgba(0, 0, 0, 0.1);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 28px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-top-right-radius: 50px;
    box-shadow: 5px -15px 0 5px #f4ece9;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 28px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -5px -15px 0 5px #f4ece9;
  }
  svg {
    width: 45px;
    height: 45px;
  }
`;

const Description = styled.p`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
