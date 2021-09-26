import { navigationLinks } from '../data/links';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledUl>
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

const StyledNavbar = styled.nav``;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const StyledLi = styled.li`
  list-style: none;
  text-transform: uppercase;
  margin: 1rem;
  .active {
    color: #f1f1f1;
    text-decoration: underline;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
