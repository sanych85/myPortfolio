import React from 'react'
import { MainSectionWrapper } from './commonComponents'
import styled from 'styled-components';
import SkillItems from './SkillItems';
import { Heading } from '.';



const Skills = () => {
    return (

        <Wrapper as = "section" className = "skills section wrapper">
            <InnerWrapper>
                <Heading type = "h1" fontFamily="Titan One">Skills</Heading>
                <SkillItems />
            </InnerWrapper>
        </Wrapper>
    )
}

export default Skills


const Wrapper = styled(MainSectionWrapper)`
display: flex;
justify-content: center;
width: 100%;
background-color: #f4fffff2;
min-height: 0px;
`

const InnerWrapper = styled.div `
width: 70%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`


