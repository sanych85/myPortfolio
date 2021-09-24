import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

interface RepoAndSyte {
    repo:string|undefined,
    live:string| undefined
}


const RepoAndSite:React.FC<RepoAndSyte> = ({repo, live}) => {
  return (
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
  );
};

export default RepoAndSite;

const Icons = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
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
