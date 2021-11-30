import { programmingLanguages } from "../content/content";
import ToolTip from "./ToolTip";
import styled from "@emotion/styled";
import mediaQueries from "../utils/mediaQueries.ts";
import { progLangVariants, programmingContVariants } from "../animations";
import AnimatedListItem from "./AnimatedListItem";
const ProgrammingList = styled.div`
  /* display: none; */
  /* background: red; */
  width: 100%;
  * {
    /* border: 1px solid black; */
  }
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* margin-top: 1rem; */
    /* background-color: red; */
    gap: 2.5rem;
    width: 100%;
    .prog-lang {
      display: flex;
      .prog-lang-mov {
        display: flex;
          font-size: 1.5rem;
          width: 100%;
          .prog-name {
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
          }
            svg {
              margin-left: .8ch;
            }

      }
    }
  }
  ${mediaQueries.tablet_up`
    display: grid;
    ul {
      grid-template-columns: repeat(3, 1fr);
      .prog-lang {
        font-size: 3rem;
        .prog-lang-mov {
        }
      }
    }
  `}
  ${mediaQueries.desktop_up`
    ul {
      .prog-lang {
        .prog-lang-mov {
          font-size: 4rem;
          display: flex;
          justify-content: center;
          .prog-name {
          display: none;
          }
        }
      }
    }
  `}
`;

const ProgrammingLanguages = () => {
  return (
    <ProgrammingList>
      <ul>
        {programmingLanguages.map((language, index) => (
          <ToolTip
            content={language.name}
            key={index}
          >
            <AnimatedListItem className="prog-lang"
            index={index}
              variants={programmingContVariants}
              initial="hidden"
              animate="show"
            >
              <div
                className="prog-lang-mov"
                variants={progLangVariants}
                initial="hidden"
                animate="show"
              >
                <div className="prog-name">
                  {language.name}
                </div>
                {language.icon}
              </div>
            </AnimatedListItem>
          </ToolTip>

        ))}
      </ul>
    </ProgrammingList>
  )
};

export default ProgrammingLanguages;