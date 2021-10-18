import  { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled, {keyframes} from 'styled-components';
import { projects } from '../data/projects';

import { Button, Heading, MoreProjects, RepoAndSite } from '../Components';

import { device } from '../Components/devices';
import Slider from '../Components/Slider';

interface RouteParams {
  id: string;
}
const SingleProjectPage = () => {
  console.log("WE ARE IN SINGLE PAGE")
  const history = useHistory();
  console.log("history", history)
  const params = useParams<RouteParams>();
  console.log("params", params)
  const proj: any = projects.find((project) => {
    return project.id === +params.id;
  });
  let [currentIndex, setCurrentIndex] = useState(0);

  const {
    id,
    repo,
    live,
    mainImg,
    detailedInfo: { imgs, description, technologies, releasedYear },
    name,
  } = proj;
  console.log(imgs, 'imgs');

  //   const [style, setStyle] = useState('0px');
  console.log(currentIndex, 'currentIndex');
  const goBack = () => {
    history.push('/');
  };

  const handleClick = (type: string): void => {
    console.log(type);
    console.log(imgs);

    if (type === 'left') {
      currentIndex === 0
        ? setCurrentIndex(imgs.length - 1)
        : setCurrentIndex((prev) => prev - 1);
    } else if (type === 'right') {
      console.log('currentIndex  in function', currentIndex);
      currentIndex === imgs.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((prev) => prev + 1);
    }


  };
  useEffect(() => {
    console.log("in use Effect")
    const interval = setInterval(()=>handleClick('right'), 4000)
    return () => clearInterval(interval);
    }
  )

  return (
    <Main>
      <Section>
        <Heading type="h2" fontFamily="Love Ya Like A Sister ">
          {name}
        </Heading>
        <Techologies>
          {technologies.map((technology: string, i: string) => (
            <TechologyItem key={i}>{technology}</TechologyItem>
          ))}
        </Techologies>
        <ProjectWrapper>
            <Slider imgs = {imgs}/>

          <Info>
            <Release>Release year: {releasedYear}</Release>
            <Description>{description}</Description>

            <RepoAndSite repo={repo} live={live} />
          </Info>
        </ProjectWrapper>
        <Button
          func={goBack}
          color="white"
          colorHover="white"
          bgColor="#836060"
          bgColorHover="#ad7373">
          back
        </Button>
      </Section>
      <Section>
        <MoreProjects id={id} />
      </Section>
    </Main>
  );
};

export default SingleProjectPage;

const CardAnimation = keyframes `
0% {
  opacity:0;
}
100% {
  opacity: 1
}

`

const ProjectInfoAnimation = keyframes `
0% {
  transform: translateY(-50px);
  opacity:0;
}
100% {
  transform: translateY(0px);
  opacity:1;
}

`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 70%;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  /* background-color: #f5f5dc47; */
  background-color: #ffffff85;
  border-radius: 10px;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  animation-name: ${CardAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
  }
  /* flex: 1; */
`;


const Description = styled.p``;

const Techologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
`;

const TechologyItem = styled.span`
  padding: 5px 10px;
  background-color: beige;
  margin: 0.5rem;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  animation-name: ${ProjectInfoAnimation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @media ${device.tablet} {
    margin-top: 1rem;
  }
`;

const Release = styled.span`
  font-family: 'Titan One', sans-serif;
  color: #4b4b86;
`;
