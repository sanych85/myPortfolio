
import styled from 'styled-components';
interface SingleSocialLinkInterface {
    name: string,
    id:number,
    link: string,
    component: any,
    color?: string
}
  
const SingleSocialLink:React.FC<SingleSocialLinkInterface> = ({name, id, link, component, color})=> {
    console.log("id", id)
    return (
        <> 
      
           <StyledLink color = {color} href = {link} >{component}</StyledLink>
        </>
    )
}

export default SingleSocialLink


const StyledLink = styled.a `
svg {
    width: 40px;
    height: 40px;
    /* color: blue; */
    color: ${({color})=>color || 'blue'}
}
` 


