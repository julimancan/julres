import styled from "@emotion/styled"
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import { colors } from "../siteColors";
import mediaQueries from "../utils/mediaQueries.ts";
import SocialLinks from "./SocialLinks";


const NavbarWrapper = styled.nav`
  display: none;
  position: fixed;
  /* background: red; */
  z-index: 100;
  bottom: 1rem;
  right: .5rem;
  ul {
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: ${colors.textColor};
        text-align: right;
        &:hover {
          color: ${colors.textHoverColor}
        }
      }
    }
  }
  ${mediaQueries.desktop_up`
    display: block;
  `}
  
`;

;
const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link href="/">
            <a><h4>Home</h4></a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a><h4>About me</h4></a>
          </Link>
        </li>
        <li>
          <a href="/JulianBustosWebDevResume.pdf" download>Download Resume</a>

        </li>
        <li>
          <SocialLinks/>
        </li>
      </ul>
    </NavbarWrapper>
  )
};

export default Navbar;
