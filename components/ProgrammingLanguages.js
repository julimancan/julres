import { programmingLanguages } from "../content/content";
import { DesktopList } from "./components";
import ToolTip from "./ToolTip";
import styled from "@emotion/styled";
import mediaQueries from "../utils/mediaQueries.ts";
const ProgrammingList = styled.section`
  display: none;
  /* background: red; */
  width: 100%;
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    /* margin-top: 1rem; */
    gap: 2.5rem;
    width: 100%;
    li {
      font-size: 1rem;
      /* border: 1px solid black; */
      div {
        display: flex;
        align-items: center;
  
        p {
          display: block;
            font-size: 1.5rem;
            white-space: nowrap;
            margin-left: 1ch;
        }
      }
    }
  }
  ${mediaQueries.desktop_up`
    display: grid;
    ul {
      grid-template-columns: repeat(3, 1fr);
      .prog-lang {
        font-size: 3rem;
        div {
          p {
            display: none
          }
        }
      }
    }
  `}
`;

const ProgrammingLanguages = ({ device }) => {
  return (
    <ProgrammingList>
      <h2>Programming Languages</h2>
      <ul device={device}>
        {programmingLanguages.map((language, index) => (
          <ToolTip
            content={language.name}
            key={index}
          >
            <li className="prog-lang"
            >
              <div >
                {language.icon}
                <p>{language.name}</p>
              </div>
            </li>
          </ToolTip>
        ))}
      </ul>
    </ProgrammingList>
  )
};

export default ProgrammingLanguages;