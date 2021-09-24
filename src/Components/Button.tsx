import React from 'react';
import styled from 'styled-components';

interface Button {
  children?: React.ReactNode;
  func?: () => void;
  color?: string;
  colorHover?: string;
  bgColor?: string;
  bgColorHover?: string;
}

interface ButtonStyles {
    color?: string;
    colorHover?: string;
    bgColor?: string;
    bgColorHover?: string;
}

const Button: React.FC<Button> = ({ children, func, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={func}>
      {children}
    </StyledButton>
  );
}; 

export default Button;

// const ButtonWrapper = styled.div `

// margin: 0 auto;
// `;

export const StyledButton = styled.button<ButtonStyles>`
  border-radius: 5px;
  padding: 5px 8px;
  display: inline-flex;
  outline: none;
  border-style: none;
  text-transform: capitalize;
  margin-bottom: 1rem;
  background-color: ${({ bgColor }) => bgColor || ''};
  color: ${({ color }) => color || ''};
  font-size: 14px;
  transition: all 0.7s ease;
  &:hover {
    cursor: pointer;
    background-color: ${({ bgColorHover }) => bgColorHover || ''};
    color: ${({ colorHover }) => colorHover || ''};
    transition: all 0.7s ease;
  }
`;
