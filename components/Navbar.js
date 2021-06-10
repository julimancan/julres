import styled from "@emotion/styled"
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import { colors } from "../siteColors";
import mediaQueries from "../utils/mediaQueries.ts";
import menuItems from "./menuItems";
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
      {menuItems.map((item, index) => (
          <li key={index} index={index}>
            {item.name === "Download My Resume" ? (
              <a href={item.name} download />
            ) : item.name === "social links" ? (
              <SocialLinks/>
            ) : (
            <Link href={item.url}>
              <a>
                <h4>
                  {item.name}
                </h4>
              </a>
            </Link>
            )}
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  )
};

export default Navbar;
