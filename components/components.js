import styled from "@emotion/styled";
import mediaQueries from "../utils/mediaQueries.ts";

export const DesktopList = styled("ul")`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem;
   background: red;
  width: 100%;

  li {
    font-size:  ${({ device }) => device === "desktop" ? "4rem" : "2rem"};
    div {
      display: flex;
      p {
        display: ${({ device }) => device === "desktop" ? "none" : "block"};
        font-size: 1.5rem;
        white-space: nowrap;
      }
    }
  }
  ${mediaQueries.tablet_up`
      gap: 4rem;
      grid-template-columns: repeat(4, 1fr);
    `}
`;