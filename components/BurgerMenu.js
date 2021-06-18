import styled from '@emotion/styled'
import Link from 'next/link';
import menuItems from './menuItems';
import { colors } from '../siteColors'
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import AnimatedListItem from './AnimatedListItem';
import mediaQueries from '../utils/mediaQueries.ts';

const transitionDuration = ".4s";

const BurgerContainer = styled.div`
  top: 2rem;
  right: 2rem;
  position: fixed;
  color: white;
  cursor: pointer;
  height: auto;
  width: auto;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const Burger = styled.div`
  display: block;
  width: 40px;
  height: 3px;
  background: ${({ open }) => open ? colors.menuBackgroundColor : colors.menuBarColor};
  border-radius: 5px;
  align-self: center;
  transition: width ${transitionDuration}, background ${transitionDuration};  
  &:before, &:after {
    content: "";
    border-radius: 5px;
    width: ${({ open }) => open ? "40px" : "50px"};
    height: 5px;
    background: ${colors.menuTextColor};
    position: absolute;
    transition: background ${transitionDuration}, top ${transitionDuration}, bottom ${transitionDuration} , transform ${transitionDuration}, width ${transitionDuration};  
  }
  &:before {
    top: ${({ open }) => open ? "1.5rem" : 0};
    transform: ${({ open }) => open ? "rotate(45deg) translateY(-15px)" : ""}
  }
  &:after {
    bottom: ${({ open }) => open ? "1.5rem" : 0};
    transform: ${({ open }) => open ? "rotate(-45deg) translateY(15px)" : ""}
  }

`;

const NavContainer = styled.nav`
  background:${colors.menuBackgroundColor};
  opacity: .95;
  position: fixed;
  width: ${({ open }) => open ? "100vw" : 0};
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width ${transitionDuration};

   h1 {
    text-decoration: none;
    color: ${colors.menuTextColor};
    margin-left: 1rem;
    /* position: absolute; */
    /* top: 1.75rem; */
    /* left: 5rem; */
    font-size: 3rem;
    transition: color ${transitionDuration};
  }
  ${mediaQueries.desktop_up`
    display: none;
  `}
`;


const NavigationList = styled.ul`
  display: ${({ open }) => open ? "flex" : "none"};
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  line-height: 3rem;  
`;

const NavigationItem = styled(AnimatedListItem)`
  h3, .download-res {
    color: ${colors.menuTextColor};
    text-transform: uppercase;
    font-weight: bold;
    margin: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
`;




const BurgerMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavContainer  open={navOpen}>
      <BurgerContainer onClick={() => setNavOpen(!navOpen)} open={navOpen} >
        <Burger open={navOpen}  />
      </BurgerContainer>

      <NavigationList open={navOpen}>
        {menuItems.map((item, index) => (
          <NavigationItem key={index} open={navOpen} index={index}>
            {item.name === "Download My Resume" ? (
              <a href={item.url} download><h3>{item.name}</h3></a>
            ) : item.name === "social links" ? (
              <SocialLinks/>
            ) : (
            <Link href={item.url}>
              <h3 onClick={() => setNavOpen(false)}>
                {item.name}
              </h3>
            </Link>
            )}
          </NavigationItem>
        ))}
        <NavigationItem>
        </NavigationItem>
      </NavigationList>
    </NavContainer>
  )
}

export default BurgerMenu;
