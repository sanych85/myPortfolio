
import Intro from '../Components/Intro';
import styled from 'styled-components';
import { Education, Skills } from '../Components';
import ProjectsInfo from '../Components/ProjectsInfo';



const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <Education/>
      <Skills />
      <ProjectsInfo/>
   
  
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
`;
