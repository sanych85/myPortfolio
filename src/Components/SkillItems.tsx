import styled, {keyframes} from 'styled-components';
import {  } from './commonComponents';
import { skills } from '../data/skills';
import {SingleSkill } from '.';
import { device } from './devices';
import LazyLoad from 'react-lazyload';


const SkillItems = () => {
  return (
    <StyledUl>
      {skills.map((skill, i) => {
          console.log(skill)
        return (
        
          <SingleSkill key= {i} {...skill}/>
          
        );
      })}
    </StyledUl>
  );
};

export default SkillItems;




const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0rem;
  width: 70%;
  @media ${device.laptopL} {
    width: 100%;
  }
`;


