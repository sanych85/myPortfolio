import React from 'react'
import { MainSectionWrapper } from './commonComponents'
import styled from 'styled-components';
import SkillItems from './SkillItems';
import { Heading } from '.';



const Skills = () => {
    return (

        <Wrapper as = "section" className = "skills section wrapper">
            <Heading type = "h1" fontFamily="Titan One">Skills</Heading>
            <SkillItems />
        </Wrapper>
    )
}

export default Skills


const Wrapper = styled(MainSectionWrapper)`
display: flex;
justify-content: flex-start;
flex-direction: column;
background-color: aqua;
min-height: 0px;
`


