import { programmingLanguages } from "../content/content";
import { DesktopList } from "./components";
import ToolTip from "./ToolTip";
import styled from "@emotion/styled";
import mediaQueries from "../utils/mediaQueries.ts";
import { progLangVariants, programmingContVariants } from "../animations";
import { motion } from "framer-motion";
const ProgrammingList = styled.section`
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
    gap: 2.5rem;
    width: 100%;
    .prog-lang {
      display: flex;
  
      .prog-lang-mov {
        display: flex;
          font-size: 1.5rem;
          width: 100%;
          p {
          white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              margin-left: .5rem;
            }
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
          display: inline-block;
        }
      }
    }
  `}
  ${mediaQueries.desktop_up`
    ul {
      .prog-lang {
        .prog-lang-mov {
          font-size: 4rem;
          p {
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
      {/* <h2>Programming Languages</h2> */}
      <ul>
        {programmingLanguages.map((language, index) => (
          <ToolTip
            content={language.name}
            key={index}
          >
            <motion.div className="prog-lang"
              variants={programmingContVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div
              className="prog-lang-mov"
                variants={progLangVariants}
              >
                <p>
                 {language.name}
                {language.icon}
                </p>
              </motion.div>
            </motion.div>
          </ToolTip>
          
        ))}
      </ul>
    </ProgrammingList>
  )
};

export default ProgrammingLanguages;