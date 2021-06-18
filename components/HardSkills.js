import styled from "@emotion/styled";
import { technologies } from "../content/content";
import mediaQueries from "../utils/mediaQueries.ts";


const HardSkillWrapper = styled.article` /* display: none; */
/* background: red; */
width: 100%;
* {
  /* border: 1px solid black; */
}

.technologies {
  list-style: none;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  /* margin-top: 1rem; */
  /* background-color: red; */
  gap: 2.5rem;
  width: 100%;
  .technology {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .technology-mov {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      li {
        .skill {
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 1.5rem;
          /* width: 40%; */
          /* background: blue; */
          .skill-name {
            /* display: flex; */

          }
            svg {
              margin-right: .8ch;
            }
        }
      }
    }
  }
 
}

${mediaQueries.tablet_up`
  .technologies {
    .technology {
      .technology-mov {
        grid-template-columns: 1fr 1fr;
        li {
          .skill {
            font-size: 1.7rem;
            /* background: red; */
          }
        }
      }
    }
  }
`}
${mediaQueries.desktop_up`
.technologies {
    .technology {
      .technology-mov {
        grid-template-columns: 1fr 1fr 1fr;

        .skill {
        font-size: 4rem;

        .skill-name {
          /* background: red; */
          
        }

          svg {
            
          }
        }
      }
    }
  }
`}
`;



const HardSkills = () => {

  return (
    <HardSkillWrapper>
      <ul className="technologies">
        {technologies.map((technology, index) => (

          <li
            key={index}
            className="technology"
          >
            <h4>{technology.name}:</h4>
            <ul className="technology-mov">
              {technology.list.map((skill, index) => (
                <li
                  key={index}
                >
                  <div className="skill">

                    {skill.icon}
                    <div class="skill-name">
                      {skill.name}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </HardSkillWrapper>
  )
};

export default HardSkills;
