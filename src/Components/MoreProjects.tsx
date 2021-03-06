import React from 'react';
import { projects } from '../data/projects';
import styled, {keyframes} from 'styled-components';
import { Heading, ImgItem } from '.';

interface MoreProjectsProps {
  id: number;
}

const MoreProjects: React.FC<MoreProjectsProps> = ({ id }) => {
  console.log(typeof id);
  return (
    <Wrapper>
      <Heading type="h4">Another projects</Heading>
      <ProjectWrapper>
        {projects
          .filter((project) => project.id !== id)
          .map((proj) => (
            <ImgItem
              key={proj.id}
              src={proj.mainImg}
              alt={proj.name}
              id={proj.id} ></ImgItem>
          ))}
      </ProjectWrapper>
    </Wrapper>
  );
};

export default MoreProjects;

const AnotherProjectAnimation = keyframes `
0% {
  transform: translateX(-50px);
  opacity:0;
}
100% {
  transform: translateX(0px);
  opacity:1;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;


`;
const ProjectWrapper = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`;
