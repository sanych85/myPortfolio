import React from 'react';
import Intro from '../Components/Intro';
import styled from 'styled-components';
import { HorizontalWrapper } from '../Components/commonComponents/MainWrapper';
import { Skills } from '../Components';
import ProjectsInfo from '../Components/ProjectsInfo';
import Footer from '../Components/Footer';


const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <Skills />
      <ProjectsInfo/>
      <Footer/>
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
