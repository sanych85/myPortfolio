import React from 'react';
import styled from 'styled-components';
import { StyledButton, Heading } from '.';
import { VerticalWrapper } from './commonComponents';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

interface Projects {
  name: string;
  id: number;
  repo: string | undefined;
  live: string | undefined;
  mainImg: any;
}

const OneProject: React.FC<Projects> = ({ name, repo, live, mainImg }) => {
  return (
    <StyledLi>
      <StyledHeading type="h4" fontFamily="Love Ya Like A Sister ">
        {name}{' '}
      </StyledHeading>

      <hr />
      <Button className="more_info">More</Button>
      <div className="imgWrapper">
        <img src={mainImg} alt={name} />
      </div>
      <Icons>
        <a href={repo}>
          Repo
          <AiFillGithub />
        </a>
        <a href={live}>
          Site
          <CgWebsite />
        </a>
      </Icons>
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
    opacity:0;

    transition: all 0.4s ease;
  }
  &:hover hr {
    width: 50px;
    color: #1613cc;
    opacity:1
  }
  &:hover .more_info {
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

const Button = styled(StyledButton)`
  color: #d4cccc;
  background-color: #102a3a;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  display: none;
  z-index: 999;
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
