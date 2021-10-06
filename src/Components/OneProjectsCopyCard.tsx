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

const OneProjectCopy: React.FC<ProjectCard> = ({
  name,
  repo,
  live,
  mainImg,
  id,
}) => {
  return (
    <StyledLi>
      <div className="front">
        <img src={mainImg} alt={name} />
      </div>
      <div className="back">
        <StyledHeading type="h3">{name}</StyledHeading>

        {/* <hr /> */}
        <RepoAndSite repo={repo} live={live} />

        <div className = "more">
          <StyledLink to={`/projects/${id}`} className="more_info ">
            More
          </StyledLink>
        </div>
      </div>
    </StyledLi>
  );
};

export default OneProjectCopy;

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
  /* position: relative; */
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
    background: red;
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
