import React from 'react';
import styled from 'styled-components';
import { StyledButton, Heading } from '.';
import { VerticalWrapper } from './commonComponents';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { useParams } from 'react-router';
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
    releasedYear: number
  };
}

const OneProject: React.FC<ProjectCard> = ({
  name,
  repo,
  live,
  mainImg,
  id,
  detailedInfo,
}) => {
  console.log(id);
  return (
    <StyledLi>
      <StyledHeading type="h4" fontFamily="Love Ya Like A Sister ">
        {name}
      </StyledHeading>

      <hr />

      <StyledLink to={`${id}`} className="more_info ">
        More
      </StyledLink>

      <div className="imgWrapper">
        <img src={mainImg} alt={name} />
      </div>
      <RepoAndSite repo={repo} live={live} />
    </StyledLi>
  );
};

export default OneProject;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 1rem; */
  list-style: none;
  /* background-color: #6bada7; */
  position: relative;
  transition: all 0.6s ease;
  &:hover div h4 {
    box-sizing: border-box;
    color: white;
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
  &:hover .more_info {
    opacity: 1;
    display: block;
  }

  .imgWrapper {
    position: relative;
    outline: 1px solid #666;

    &:before {
      content: '';
      position: absolute;
      background-color: transparent;
      cursor: pointer;
    }
    img {
      width: 346px;
      height: 238px;
    }
    &:hover:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      background-color: #889feb8b;
      width: 100%;
      height: 100%;
      transition: all 0.6s ease;
    }
  }
`;

const StyledHeading = styled(Heading)`
  transition: all 0.6s ease;
  margin-bottom: 0px;

  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; */
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

const StyledLink = styled(Link)`
  border-radius: 5px;
  padding: 5px 8px;
  display: inline-flex;
  outline: none;
  border-style: none;
  text-decoration: none;
  color: #d4cccc;
  background-color: #102a3a;
  position: absolute;
  top: 50%;
  left: 50%;
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
