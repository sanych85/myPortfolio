
import styled from 'styled-components';
import { Heading } from '.';
import { MainSectionWrapper } from './commonComponents';
import { projects } from '../data/projects.js';

import OneProject from './OneProject';
import { device } from './devices';




const ProjectsInfo = () => {
// const params = useParams()
// console.log("PARAMS ON THE MAIN PAGE")
  return (

        <Wrapper as="section" id = "projects" >
          <Heading type="h3" fontFamily="Roboto">Projects</Heading>
          <InnerWrapper as = "ul">
            {projects.map((project) => {
              return <OneProject key={project.id} {...project} />;
            })}
          </InnerWrapper>
        </Wrapper> 
    

  );
};

export default ProjectsInfo;

const Wrapper = styled(MainSectionWrapper)`
flex-direction: column;
width: 70%;
background-color: #f4ece9;
@media ${device.laptopL} {
  width:100%
}
/* width: 90%; */
`;


const InnerWrapper = styled(MainSectionWrapper) `
flex-wrap: wrap;
padding: 0px;
width:100%;
`
