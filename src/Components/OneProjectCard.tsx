import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Heading } from '.';
// import { VerticalWrapper } from './commonComponents';
// import { AiFillGithub } from 'react-icons/ai';
// import { CgWebsite } from 'react-icons/cg';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import RepoAndSite from './RepoAndSite';

export interface ProjectCard {
  name: string;
  id: number;
  repo: string | undefined;
  live: string | undefined;
  mainImg: string;
  detailedInfo: {
    imgs: Array<string>;
    description: string;
    technologies: Array<string>;
    releasedYear: number;
  };
}

const OneProject: React.FC<ProjectCard> = ({
  name,
  repo,
  live,
  mainImg,
  id,

}) => {

  return (
    <StyledLi>
      <div className="imgWrapper">
        <StyledLink to={`${id}`} className="more_info ">
          More
        </StyledLink>
        <img src={mainImg} alt={name} />
        <StyledHeading type="h4" fontFamily="Love Ya Like A Sister ">
          {name}
        </StyledHeading>
      </div>

      <CardFooter>
        {/* <hr /> */}
        <RepoAndSite repo={repo} live={live} />
      </CardFooter>
    </StyledLi>
  );
};

export default OneProject;

const StyledLink = styled(Link)`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  padding: 5px 8px;
  outline: none;
  border-style: none;
  text-decoration: none;
  color: #d4cccc;
  background-color: #102a3a;

  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  z-index: 999;
  transition: all 0.6s ease;
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
  &:hover + .imgWrapper::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #889feb8b;
    width: 100%;
    height: 100%;

    transition: all 0.6s ease;
  }
`;

const StyledHeading = styled(Heading)`
  transition: all 0.6s ease;
  margin-bottom: 0px;

  position: absolute;
  top: 10%;
  left: 80%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #464040e6;
`;
const breatheAnimation = keyframes`
0% {
  transform: rotate(0deg) translate(-50%, -50%);
  transform-origin: left center;
  opacity:0;
  width:0px;
  height: 0;

}
100% {
  transform: rotate(1080deg)  translate(-50%, -50%);
  transform-origin: left center;
  opacity:1;
  width: 41px;
  height:23px;
}
`;
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  list-style: none;
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.6s ease;
  -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;

  margin: 0.3rem;
  background: rgb(193, 203, 208);
  background: rgb(242, 242, 242);
  background: radial-gradient(
    circle,
    rgba(242, 242, 242, 0.98) 0%,
    rgba(202, 212, 232, 1) 100%
  );

  &:before {
    content: '';
    position: absolute;
    top: -2%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* border: 1px solid #000; */

    background: rgb(193, 203, 208);
    background: rgb(242, 242, 242);
    background: radial-gradient(
      circle,
      rgba(242, 242, 242, 0.98) 0%,
      rgba(202, 212, 232, 1) 100%
    );
    transform: translateX(-50%);
  }
  &:hover div h4 {
    box-sizing: border-box;
    color: black;
    /* border-bottom: 1px solid #000; */
  }
  hr {
    width: 1px;
    opacity: 0;

    transition: all 0.4s ease;
  }
  &:hover hr {
    width: 50px;
    color: #1613cc;
    opacity: 1;
  }

  .imgWrapper {
    position: relative;
    height: 238px;

    &:hover .more_info {
      animation-name: ${breatheAnimation};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &:before {
      content: '';
      position: absolute;
      background-color: transparent;
      cursor: pointer;
    }
    img {
      width: 346px;
      height: 238px;
      border-radius: 5px;
      clip-path: polygon(0 0%, 100% 0, 85% 50%, 100% 100%, 0 100%, 0% 50%);
      transition: all 0.3s ease;
      &:hover {
        clip-path: polygon(0 0%, 100% 0, 85% 50%, 100% 100%, 0 100%, 0% 50%);
        box-shadow: inset 0 0 0 23px #53ea93;
      }
    }
    &:hover:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      background-color: #889feb8b;
      /* clip-path: polygon(0 0%, 100% 85%, 100% 100%, 0 85%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); */
      clip-path: polygon(0 0%, 100% 0, 85% 50%, 100% 100%, 0 100%, 0% 50%);
      width: 100%;
      height: 100%;
      transition: all 0.6s ease;
      box-shadow: inset 0 0 0 13px #439ab4bc;
    }
    &:hover ${StyledHeading} {
      opacity: 0;
    }
  }
`;

const Icons = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  a {
    background-color: antiquewhite;
    padding: 3px 6px;
    margin: 1rem;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.6s ease;
    &:hover {
      background-color: #ddaaa7;
      cursor: pointer;
    }
  }
  svg {
    height: 15px;
    width: 15px;
  }
`;

const CardFooter = styled.div`
  display: flex;
`;
