import styled from 'styled-components';
import React from 'react';

interface Progress {
  stars: string;
}

const createDivElem = (stars: string) => {
  return Array.from(Array(10).keys()).map((elem: any, i) => {
    console.log(stars);
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
  width: 90%;
  height: 15px;
 
`;

const StyledStar = styled.div`
  height: 15px;
  width: 10%;
  border: 1px solid #0000002d;
  border-radius: 10px;
  &:not(:last-child) {
    border-right: 0px solid black;
  }

  &.painted {
    background-color: #cccc31b2;
  }
`;
