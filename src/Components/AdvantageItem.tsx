import React from 'react';
import styled from 'styled-components';
import { Heading } from '.';

interface Advantages {
  name: string;
  description: string;
  svg: JSX.Element;
}

const AdvantageItem: React.FC<Advantages> = ({ name, description, svg }) => {
  return (
    <Li>
      <SvgWrapper>{svg}</SvgWrapper>
      <CardWrapper>
        
        <Heading type="h4">{name}</Heading>
        <Description>{description}</Description>
      </CardWrapper>
    </Li>
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
  background-color: #f4ece9 ;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  justify-content: center;
  box-shadow: 0 10px 0 rgba(0,0,0,0.1);
  inset: 0 -8px 0 rgba(255, 255,255,0.25),
  0 45px 0 rgba(0,0,0,0.1);
  &:before {
    content: "";
    position: absolute;
    top:0;
    left:28px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-top-right-radius: 50px;
    box-shadow: 5px -15px 0 5px #f4ece9
  }
  &:after {
    content: "";
    position: absolute;
    top:0;
    right:28px;
    width: 35px;
    height: 35px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -5px -15px 0 5px #f4ece9
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
