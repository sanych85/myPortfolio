import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Heading } from '.';
import { MainSectionWrapper } from './commonComponents';
import { projects } from '../data/projects.js';
import OneProjectCard from './OneProjectCard';
import OneProjectCopy from './OneProjectsCopyCard';




const ProjectsInfo = () => {

  return (

        <Wrapper as="section">
          <Heading type="h3" fontFamily="Roboto">Projects</Heading>
          <InnerWrapper as = "ul">
            {projects.map((project) => {
              return <OneProjectCopy key={project.id} {...project} />;
            })}
          </InnerWrapper>
        </Wrapper> 
    

  );
};

export default ProjectsInfo;

const Wrapper = styled(MainSectionWrapper)`
flex-direction: column;
width: 100%;
background-color: f4ece9;
/* width: 90%; */
`;


const InnerWrapper = styled(MainSectionWrapper) `
flex-wrap: wrap;
padding: 0px;
`

const MainWrapper = styled.div `

`
