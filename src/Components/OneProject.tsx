import React from 'react';
import styled from 'styled-components'; 
import { Heading } from '.';

import { Link } from 'react-router-dom';
import RepoAndSite from './RepoAndSite';
import LazyLoad from 'react-lazyload';
import  {ShowAnimation} from "./commonComponents/Animations"

export interface ProjectCard {
  name: string;
  id: number;
  repo?: string;
  live?: string ;
  mainImg: string;
  detailedInfo: {
    imgs: string[];
    description: string;
    technologies: string[];
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
    <LazyLoad height={200} offset={100}>
      <StyledLi>
        <div className="front">
          <img src={mainImg} alt={name} />
        </div>
        <div className="back">
          <StyledHeading type="h3" color="#504a89">
            {name}
          </StyledHeading>

          {/* <hr /> */}
          <div className="more">
            <StyledLink to={`/projects/${id}`} className="more_info ">
              More Info
            </StyledLink>
          </div>
          <RepoAndSite repo={repo} live={live} />
        </div>
      </StyledLi>
    </LazyLoad>
  );
};

export default OneProject;


const StyledLink = styled(Link)`
  border-radius: 5px;
  padding: 5px 8px;
  outline: none;
  border-style: none;
  text-decoration: none;
  color: #d4cccc;
  background-color: #102a3a;
  font-size: 1.1rem;
  z-index: 999;
  transition: all 0.6s ease;
`;

const StyledHeading = styled(Heading)``;

const StyledLi = styled.li`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  position: relative;
  list-style: none;
  width: 346px;
  margin: 1rem;
  transition: all 0.5s ease;
  animation-name: ${ShowAnimation};
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
  &:hover {
    .front {
      transform: perspective(600px) rotateY(180deg);
    }
    .back {
      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: space-around;
      transform: perspective(600px) rotateY(0);
    }
  }
  height: 238px;
  .more {
    display: inline-flex;
  }
  .front,
  .back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    backface-visibility: hidden;
    --webkit-backface-visibility: hidden;
    transition: transform 0.9s ease;
    background: rgb(242, 242, 242);
    background: radial-gradient(
      circle,
      rgba(242, 242, 242, 0.98) 0%,
      rgba(202, 212, 232, 0.7539390756302521) 100%
    );
  }

  .front {
    transform: perspective(600px) rotateY(0);
    img {
      width: 100%;
      height: auto;
    }
  }

  .back {
    transform: perspective(600px) rotateY(180deg);
  }
  .imgWrapper {
    position: relative;
    margin: 1rem;
    margin-bottom: 0.5rem;
    height: 238px;
    transition: all 0.4s ease;

    img {
      width: 346px;
      height: 238px;
      border-radius: 5px;

      transition: all 0.3s ease;
    }
  }
`;
