import React from 'react';
import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { HorizontalWrapper } from './commonComponents';
import { skills } from '../data/skills';
import { ProgressBar } from '.';

interface SkillInterface {
  color?: string;
}





const SkillIcons = () => {
  return (
    <StyledUl>
      {skills.map((skill, i) => {
        return (
          <StyledLi key={i} color={skill.color}>
            <div className = "skillName">{skill.name}</div>
            <p>{skill.text}</p>
            <span>{skill.knowledge}</span>
            <ProgressBar stars = {skill.knowledge}/>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

export default SkillIcons;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0rem;
  width: 70%;
`;

const StyledLi = styled.li<SkillInterface>`
  margin: 1rem;
  border-radius: 5px;
  /* color ${({ color }) => color || ''}; */
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 15%;
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
  .skillName{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #8080804c;
    border-radius: 5px;
    width: 100px;
    height: 100px;
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
    }
  }
`;
