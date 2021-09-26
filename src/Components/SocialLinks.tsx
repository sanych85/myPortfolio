
import styled from 'styled-components';

import {socialLinks} from "../data/links"
import SingleSocialLink from './SingleSocialLink';



const SocialLinks = () => {
    console.log(socialLinks)
    return (
        <Section>
            
            <IconWrapper>
                {socialLinks.map(link=> {
                    return <SingleSocialLink  {...link} key = {link.id}   />
                })}
            </IconWrapper>
        </Section>
    )
}

export default SocialLinks  

const Section = styled.section ` 
display: flex;
justify-content: center;
`

const IconWrapper = styled.div `
display: inline-flex;

`
