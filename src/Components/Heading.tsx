import React from 'react';
import styled, {css} from 'styled-components';

interface HeadingProps {
  type: string;
  children?: React.ReactNode;
//   rest?: any;
  color?: string;
  fontFamily?: string | undefined;

}

interface StyledHeading {
    color?: string;
    fontFamily?: string | undefined;
}

const renderHead = (type: string, children: React.ReactNode, rest: any) => {
  if (type === 'h1') {
    return <H1 {...rest}>{children} </H1>;
  } else if (type === 'h2') {
    return <H2 {...rest}>{children} </H2>;
  } else if (type === 'h3') {
    return <H3 {...rest}>{children}</H3>;
  } else if (type === 'h4') {
    return <H4 {...rest}>{children}</H4>;
  }
};

const Heading: React.FC<HeadingProps> = ({ type, children, ...rest }) => {

  return <>{renderHead(type, children, rest)}</>;
};

export default Heading;

const base = css` 
  text-transform: uppercase;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

`;

// const CommonHeadingStyles = styled.h1<StyledHeading>`
//   text-transform: uppercase;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   ${base}
//   color: ${({ color }) => color || 'green'};
//   font-family: ${({fontFamily})=>fontFamily || ""};
//   text-align: center;

// `;

const H1 = styled.h1<StyledHeading>`
  ${base}
  color: ${({ color }) => color || '#754040'};
  font-family: ${({fontFamily})=>fontFamily || ""};
  font-size: 2rem;
`;

const H2 = styled.h2<StyledHeading>`
  ${base}
  color: ${({ color }) => color || '#754040'};
  font-family: ${({fontFamily})=>fontFamily || ""};
  font-size: 1.7rem;
`;
const H3 = styled.h3<StyledHeading>`
  ${base}
  color: ${({ color }) => color || '#754040'};
  font-family: ${({fontFamily})=>fontFamily || ""};
  font-size: 1.4rem;
`;
const H4 = styled.h4<StyledHeading>`
  ${base}
  color: ${({ color }) => color || '#754040'};
  font-family: ${({fontFamily})=>fontFamily || ""};
  font-size: 1.2rem;
`;
