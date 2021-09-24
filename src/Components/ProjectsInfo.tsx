import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Heading } from '.';
import { MainSectionWrapper } from './commonComponents';
import { projects } from '../data/projects.js';
import OneProject from './OneProjectCard';




const ProjectsInfo = () => {

  return (
    <MainWrapper>
        <Wrapper as="section">
          <Heading type="h1" fontFamily="Titan One">Projects</Heading>
          <InnerWrapper as = "ul">
            {projects.map((project) => {
              return <OneProject key={project.id} {...project} />;
            })}
          </InnerWrapper>
        </Wrapper>
    </MainWrapper>

  );
};

export default ProjectsInfo;

const Wrapper = styled(MainSectionWrapper)`
flex-direction: column;
width: 100%;
background-color: #6bada7;
/* width: 90%; */
`;


const InnerWrapper = styled(MainSectionWrapper) `
flex-wrap: wrap;
`

const MainWrapper = styled.div `

`
