import React from 'react';
import styled from 'styled-components';

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
  console.log(children);
  return <div>{renderHead(type, children, rest)}</div>;
};

export default Heading;

// const base = css` 
//   text-transform: uppercase;
 
//   padding-left: 1rem;
//   padding-right: 1rem;
// `;

const CommonHeadingStyles = styled.h1<StyledHeading>`
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ color }) => color || 'green'};
  font-family: ${({fontFamily})=>fontFamily || ""};
  text-align: center;

`;

const H1 = styled(CommonHeadingStyles)`
  font-size: 2rem;
`;

const H2 = styled(CommonHeadingStyles)`
  font-size: 1.7rem;
`;
const H3 = styled(CommonHeadingStyles)`
  font-size: 1.4rem;
`;
const H4 = styled(CommonHeadingStyles)`
  font-size: 1.2rem;
`;
