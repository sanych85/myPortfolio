import React from 'react';
import styled from 'styled-components';
import { Heading } from '.';

interface Advantages {
  name: string;
  description: string;
  svg: JSX.Element;
}

const AdvantageItem: React.FC<Advantages> = ({ name, description, svg }) => {
  return (
    <Li>
      <Heading type="h4">{name}</Heading>
      <SvgWrapper>{svg}</SvgWrapper>
      <Description>{description}</Description>
    </Li>
  );
};

export default AdvantageItem;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 2rem 0.5rem;
  /* border: 1px solid #000; */
`;
const SvgWrapper = styled.div`
display: flex;
justify-content: center;
  svg {
      width: 45px;
      height: 45px;
      
  }`;

const Description = styled.p`
padding-left:2.5rem;
padding-right: 2.5rem;
`;
