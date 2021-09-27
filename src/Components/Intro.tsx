import styled, {keyframes}  from 'styled-components';
import { MainSectionWrapper } from './commonComponents/MainWrapper';
import myPhoto from '../img/myPhoto2.jpg';
import { Heading, SocialLinks } from '.';

const Intro = () => {
  return (
    <Wrapper as="section" className="section">
      <LeftSection>
        <ImgWrapper className="myImg">
          <Img src={myPhoto} alt="Aleksandr Shatokhin" />
        </ImgWrapper>
      </LeftSection>

      <About>
        <Heading type="h2" color="#353454" fontFamily="Titan One">
          Hello, I'm
        </Heading>
        <Heading type="h1" color="#574a70" fontFamily="Love Ya Like A Sister ">
          Alex Shatokhin
        </Heading>
        <p className="about-information">
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web.
        </p>
        <SocialLinks />
      </About>
    </Wrapper>
  );
};

const titleAnimation = keyframes` 

0% {
  transform: translateX(-50px);
  opacity:0;


}

100% {
  transform: translateX(0px);
  opacity:1;
}
`;

const aboutAnimation = keyframes `
0% {
  transform: translateY(50px);
  opacity:0;


}

100% {
  transform: translateY(0px);
  opacity:1;
}
`


export default Intro;

const Wrapper = styled(MainSectionWrapper)`
margin-bottom: 69px;
`;

const LeftSection = styled.section`
  width: 50%;
`;

const About = styled.section`
  height: 100%;
  width: 50%;
  margin-bottom: 200px;
  position: relative;
  /* opacity: 0; */
  animation-name: ${aboutAnimation};
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;

  .about-information {
    font-size: 1.2rem;
  }
`;

const ImgWrapper = styled.figure`
  display: flex;
  justify-content: center;
  
  margin-right: 1rem;
  /* margin-bottom: 200px; */
  position: relative;
  animation-name: ${titleAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 4rem;
    bottom: 3rem;
    width: 60%;
    height: 100%;
    border-radius: 10px;
    z-index:2;
   
 
    border: 3px solid black;
  }
`;

const Img = styled.img`
  width: 60%;
   border-radius: 10px;

  /* border-radius: 50%; */
  /* -webkit-box-shadow: 6px 0 #34286936, 12px 0 #8070964b, 18px 0 #a876f33b;
  box-shadow: 6px 0 #34286936, 12px 0 #8070964b, 18px 0 #a876f33b; */
  position: relative;
  z-index: 3
`;
