import React from 'react'
import styled from 'styled-components';

interface Button {
    children?: React.ReactNode;
}

const Button:React.FC<Button> = ({children}) => {
    return (
       
            <StyledButton>{children}</StyledButton>
        
    )
}

export default Button


const ButtonWrapper = styled.div `

margin: 0 auto;
`;

export const StyledButton = styled.button `
border-radius: 5px;
padding: 5px 8px;
display: inline-flex;
outline: none;
border-style: none

`
