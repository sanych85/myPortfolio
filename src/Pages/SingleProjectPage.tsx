import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { ProjectCard } from '../Components/OneProjectCard';
import { Button, Heading, MoreProjects ,RepoAndSite} from '../Components'; 
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';


interface RouteParams {
  id: string;
}
const SingleProjectPage = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();
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
    history.goBack();
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

    // useEffect(() => {
    //   const interval = setInterval(() => handleClick('right'), 4000);

    //   return () => {
    //     clearInterval(interval);
    //   };
    // }, [currentIndex]);
  return (
    <Main>
      <Section>
        <Heading type="h1" fontFamily="Love Ya Like A Sister ">
          {name}
        </Heading>
        <Techologies>
          {technologies.map((technology: string, i: string) => (
            <TechologyItem key={i}>{technology}</TechologyItem>
          ))}
        </Techologies>
        <ProectWrapper>
          <ImgWrapper>
            {imgs.map((image: string, i: string) => (
              <Figure key={i}>
                <BsCaretLeftFill
                  onClick={() => handleClick('left')}
                  className="left-arrow"
                />
                <SliderImage src={imgs[currentIndex]} alt="" />
                <BsCaretRightFill
                  onClick={() => handleClick('right')}
                  className="right-arrow"
                />
              </Figure>
            ))}
          </ImgWrapper>

          <Info>
              <Release>Release year: {releasedYear}</Release>
            <Description>{description}</Description>

            <RepoAndSite repo={repo} live={live} />
          </Info>
        </ProectWrapper>
        <Button func={goBack} color = "white" colorHover = "black" bgColor = "black" bgColorHover = "white">back</Button>
        
      </Section>
      <Section>
          <MoreProjects id= {id}/>
      </Section>
    </Main>
  );
};

export default SingleProjectPage;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
background-color: #f5f5dc47;
border-radius: 10px;
`;

const Figure = styled.figure`
  /* position: relative; */
  width: 519px;
  height: 357px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 1rem;
  svg {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #412e861f;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #412e86dd;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 110%;
        height: 110%;
      }
    }
  }
  .left-arrow {
    left: -6%;
  }
  .right-arrow {
    right: -6%;
  }
`;

const Description = styled.p``;

const Techologies = styled.div`
  display: flex;
`;

const ProectWrapper = styled.div`
  display: flex;
  margin: 1.5rem;
  /* flex: 1; */
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

`;
const ImgWrapper = styled.div`
  /* overflow: hidden; */
  position: relative;
  display: flex;
  width: 519px;
  height: 357px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  
`;

const SliderImage = styled.img`
  width: 519px;
  height: 357px;
  position: absolute;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  /* &:hover {
    width: 600px;
    height: 400px;
} */
`;

const Release = styled.span ` 
font-family: "Titan One", sans-serif;
color: #4b4b86
`
