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
  gap: 1rem;
`;
const SvgWrapper = styled.div`
display: flex;
justify-content: center;
  svg {
      width: 45px;
      height: 45px;
      
  }`;

const Description = styled.p``;
