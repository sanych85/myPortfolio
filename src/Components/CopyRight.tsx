import React from 'react'
import styled from 'styled-components';

const CopyRight = () => {
    return (
        <Wrapper>
            <StyledSpan>2021 Alex Shatokhin</StyledSpan>
        </Wrapper>
    )
}

export default CopyRight


const Wrapper = styled.div `

`

const StyledSpan = styled.span `
font-family: "Love Ya Like A Sister", "sans-serif" ;
font-weight: bold;
font-size: 18px
`
