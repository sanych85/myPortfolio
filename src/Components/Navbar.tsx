import { navigationLinks } from '../data/links';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavbarProps  {
  type?: "footerNavbar" 
}

const Navbar:React.FC<NavbarProps> = ({type}) => {
  console.log(type, "type")
  return (
    <StyledNavbar>
      <StyledUl type= {type}>
        {navigationLinks.map(({ name, link, id }) => {
          return (
            <StyledLi key={id}>
              <StyledLink exact to={link}>
                {name}
              </StyledLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNavbar>
  );
};

export default Navbar;

const navbarAnimation = keyframes `
0% {
  transform: translateX(-200px);
  opacity:0;
}

100% {
  transform: translateX(0px);
  opacity:1;
}
`



const StyledNavbar = styled.nav`
  animation-name: ${navbarAnimation};
  animation-duration: 1s;
  animation-delay: 0.9s;
  animation-fill-mode: backwards;
`;

const StyledUl = styled.ul<NavbarProps>`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
  @media (max-width:768px) {
    flex-direction: ${({type})=> type==="footerNavbar"? "column":"row"};
  }
`;

const StyledLi = styled.li`
  list-style: none;
  text-transform: uppercase;
  margin: 1rem;
  .active {
    color: #d16464;
    text-decoration: underline;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Love Ya Like A Sister", "sans-serif" ;
  font-size: 20px;
  transition: all 0.8s ease;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0px;
    height: 1px;
    background-color: black;
    transition: all 0.4s ease;
  }
  &:hover {
    color: #abe6de;
  }
  &:hover:before {
   width: 100%;
   bottom: -5px;
  }
`;
