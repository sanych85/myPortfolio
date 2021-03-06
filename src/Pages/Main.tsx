import Intro from '../Components/Intro';
import styled from 'styled-components';
import { Career, Education, Skills, WhyYouShouldHire } from '../Components';
import ProjectsInfo from '../Components/ProjectsInfo';
import LazyLoad from 'react-lazyload';
const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <Education />
      <WhyYouShouldHire/>
      
      <Career />
      <Skills />
      <ProjectsInfo />
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
