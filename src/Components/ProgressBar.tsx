import styled from 'styled-components';
import React from 'react';

interface Progress {
  stars: string;
}

const createDivElem = (stars: string) => {
  return Array.from(Array(10).keys()).map((elem, i) => {

    return +stars > i ? (
      <StyledStar className="painted" key={i}></StyledStar>
    ) : (
      <StyledStar key={i}></StyledStar>
    );
  });
};

export const ProgressBar: React.FC<Progress> = ({ stars }) => {
  return <Wrapper >{createDivElem(stars)}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 15px;
 
`;

const StyledStar = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #0000002d;
  border-radius: 10px;
  &:not(:last-child) {
    border-right: 0px solid black;
  }

  &.painted {
    background-color: #cccc31b2;
  }
`;
