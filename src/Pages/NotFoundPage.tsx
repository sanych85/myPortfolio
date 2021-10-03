import React from 'react'

import styled from 'styled-components';
import { Heading } from '../Components';

const NotFoundPage = () => {
    
    return (
        <Wrapper>
         <StyledHeading type = "h1">Sorry, page is not found</StyledHeading>
         
         <Heading type = "h4">Maybe you want to return to the <a href="./">main page?</a>  </Heading> 
        </Wrapper>
    )
}

export default NotFoundPage

const Wrapper = styled.main `
min-height: calc(100vh - 189px);
display: flex;
justify-content: center;
flex-direction: column;
`

const StyledHeading = styled(Heading) `
    margin-top: 2rem;
`
