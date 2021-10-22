import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Heading, ProgressBar } from '.';
import { ShowAnimation } from './commonComponents/Animations';
import LazyLoad from 'react-lazyload';
interface SkillInterface {
  name: JSX.Element;
  color: string;
  knowledge: string;
  text: string;
}

interface StyledLiInterface {
  color: string;
}

const SingleSkill: React.FC<SkillInterface> = ({
  name,
  knowledge,
  text,
  color,
}) => {
  return (
    <LazyLoad height={200} offset={100}>
      <StyledLi>
        <Skill className="skillName" color={color}>
          {name}
        </Skill>
        <StyledHeading type="h4">{text}</StyledHeading>
        {/* <span>{knowledge}</span> */}
        <ProgressBar stars={knowledge} />
      </StyledLi>
    </LazyLoad>
  );
};

export default SingleSkill;

const borderAnimation = keyframes`
0% {
  transform: rotate(0deg)
}
100% {
  transform: rotate(360deg)
}
`;
const StyledLi = styled.li`
  /* color ${({ color }) => color || ''}; */
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid #000; */
  /* width: 25%; */
  /* width: 15%; */
  /* min-width: 200px;
  max-width: 300px; */
  margin: 0rem;
  border-radius: 5px;
  margin: 0.5rem;
  animation-name: ${ShowAnimation};
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
  p {
    margin: 0rem;
    font-family: '';
    color: #5e52ca90;
    font-size: 1.2rem;
    font-family: 'Titan One', 'sans serif';
  }
  span {
    font-family: 'Love Ya Like A Sister', 'sans serif';
    font-weight: bold;
  }
`;

const Skill = styled.div<StyledLiInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: #dddddd;
  border-radius: 5px;

  width: 100px;
  height: 100px;
  /* border: 1px solid #000; */
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    /* inset: 14px; */
  }
  &:hover:before {
    content: '';
    position: absolute;
    width: 40%;
    height: 140%;
    background: linear-gradient(#00ccff, #d400d4);
    animation: ${borderAnimation} 2s linear infinite;
  }

  &:hover:after {
    content: '';
    position: absolute;
    background-color: #dddddd;
    inset: 4px;
  }
  /* height: 100px; */
  svg {
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ color }) => color || ''};
    z-index: 999;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 1.05rem;
  padding: 0.2rem;
  margin: 0.2rem;
`;
