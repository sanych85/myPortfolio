
import styled from 'styled-components';
interface SingleSocialLinkInterface {
    name: string,
    id:number,
    link: string,
    component: any,
    color?: string,
    colorHover?:string 
}

interface StyledSingleSocialLinkInterface {
    color?: string,
    colorHover?:string 

}
  
const SingleSocialLink:React.FC<SingleSocialLinkInterface> = ({name, id, link, component, color,colorHover})=> {
    console.log("id", id)
    return (
        <> 
      
           <StyledLink color = {color} href = {link} colorHover = {colorHover} >{component}</StyledLink>
        </>
    )
}

export default SingleSocialLink


const StyledLink = styled.a<StyledSingleSocialLinkInterface> `
svg {
    width: 40px;
    height: 40px;
    /* color: blue; */
    color: ${({color})=>color || 'blue'};
    &:hover {
        color: ${({colorHover})=>colorHover || 'blue' }
    }
}
` 


