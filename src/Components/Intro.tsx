import React from 'react';
import styled from 'styled-components';
import { MainSectionWrapper } from './commonComponents/MainWrapper';
import myPhoto from '../img/myPhoto2.jpg';
import { Heading } from '.';

const Intro: React.FC = () => {
  return (
    <Wrapper as="section" className="section">
      <div className="myImg">
        <img src={myPhoto} alt="" />
      </div>
      <div className="about">
        <Heading type="h2" color="#353454" fontFamily="Titan One">
          Hello, I'm
        </Heading>
        <Heading type="h1" color="#574a70" fontFamily="Love Ya Like A Sister ">
          Alex Shatokhin
        </Heading>
        <p className = "about-information">
        A Front-End Web Developer passionate about creating interactive applications and experiences on the web.
        </p>
      </div>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled(MainSectionWrapper)`


  .myImg {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-right: 1rem;
    margin-bottom: 200px;
    img {
      width: 50%;
      height: 50%;
      border-radius: 50%;
      -webkit-box-shadow: 6px 0 #34286936, 12px 0 #8070964b, 18px 0 #a876f33b;;
      box-shadow: 6px 0 #34286936, 12px 0 #8070964b, 18px 0 #a876f33b;
    }
  }
  .about {
    height: 100%;
    width: 50%;
    margin-bottom: 200px;
    .about-information {
        font-size: 1.2rem;
    }
  }
`;
