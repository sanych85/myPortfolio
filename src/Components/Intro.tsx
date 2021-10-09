import styled, {keyframes}  from 'styled-components';
import { MainSectionWrapper } from './commonComponents/MainWrapper';
import myPhoto from '../img/myPhoto2.jpg';
import { Heading, SocialLinks } from '.';
import { device } from './devices';

const Intro = () => {
  return (
    <Wrapper as="section" className="section">
      <LeftSection>
        <ImgWrapper className="myImg">
          <Img src={myPhoto} alt="Aleksandr Shatokhin" />
        </ImgWrapper>
      </LeftSection>

      <About>
        <Heading type="h2" color="#353454" fontFamily="Roboto">
          Hello, I'm
        </Heading>
        <Heading type="h2" color="#574a70" fontFamily="Love Ya Like A Sister ">
          Alex Shatokhin
        </Heading>
        <AboutInformation>
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web.
        </AboutInformation>
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
min-height: calc(100vh - 100px);
@media ${device.laptop} {
   flex-direction: column;
   min-height:auto;
   width: 100%;
   margin-bottom: 0px;
  }
 
`;

const LeftSection = styled.section`
  width: 50%;
  @media ${device.laptop} {
    width: 100%;
    margin-top: 4rem;
  }
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
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 20px;
    
  }

`;

const AboutInformation =styled.p `
font-size: 1.2rem;
padding-left: 1rem;
padding-right: 1rem;
`



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
    @media ${device.laptop} {
      left: 3rem;
    bottom: 1rem;
    }
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
