import styled from "@emotion/styled";
import { socialLinks } from "../content/content";
import { colors } from "../siteColors";



const SocialLinkWrapper = styled.div`
margin: .5rem 0 0;
ul {

  display: flex;
  justify-content: space-evenly;
  list-style: none;
  li {
    cursor: pointer;
    a{
      color: ${colors.textColor};

    }
    a:hover {
      color: ${colors.textHoverColor}
    }
  }
}
`;
const SocialLinks = () => {
  return (
    <SocialLinkWrapper>
      <ul>
        {socialLinks.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </SocialLinkWrapper>
  )
};

export default SocialLinks;
