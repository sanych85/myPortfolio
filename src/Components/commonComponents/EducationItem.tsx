import React from 'react';
import styled, {css} from 'styled-components';
import { Heading } from '..';
import {IoMdSchool,} from "react-icons/io";
import {BsCalendar} from "react-icons/bs"
import {FaUniversity} from "react-icons/fa" 
import { device } from '../devices';
interface EducationInterface {
  id: number;
  speciality: string;
  univercityName: string;
  degree: string;
  year: string;
}

const EducationItem: React.FC<EducationInterface> = ({
  univercityName,
  degree,
  year,
  speciality,
}) => {
  return (
    <Wrapper>
      <UnivercityAndYear>
        <StyledHeading type = "h4">{univercityName}</StyledHeading>
      </UnivercityAndYear>
      <EducationInfo>
        <Degree><IoMdSchool/>{degree}</Degree>
        <Speciality><FaUniversity/>{speciality}</Speciality>
        <Year><BsCalendar/>{year}</Year>
      </EducationInfo>
    </Wrapper>
  );
};

export default EducationItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* align-items: center; */
  flex:1;
  margin: 2rem auto;
  gap: 1rem;

`;


const UnivercityAndYear = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  /* background-color: green; */
`;

const StyledHeading = styled(Heading) `
margin: 0rem;
font-size: 1rem;
text-shadow: 1px 1px 2px #e1afaf, 0 0 1em #d1cecf, 0 0 0.3em #8f875f;
`



const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 0rem;
  padding-left: 4rem;

  /* background-color: red; */
`;
const educationBase = css`
position: relative;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
font-size: 16px;
font-family: "Roboto";
svg {
    position: absolute;
    top: 0px;
    left: -30px;
    width: 1.5rem;
    height: 1.5rem;
}

` 
const Year = styled.span`
${educationBase}
`;

const Degree = styled.span`
${educationBase}

`;
const Speciality = styled.span`
${educationBase}`;
