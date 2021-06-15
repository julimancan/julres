import styled from "@emotion/styled";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { colors } from "../siteColors";
import mediaQueries from '../utils/mediaQueries.ts';


const ProjectModalContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${colors.menuBackgroundColor};
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 4ch 3rem;

  svg {
    cursor: pointer;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      /* min-width: 300px;
      max-width: 500px; */
      margin: 1rem 0;
    }
    p {
      margin: .5rem 0;
      align-self: flex-start;
    }
    a {
      color: white;
      text-decoration: none;
      align-self: flex-start;
      margin: 1rem 0;
      font-size: .8rem;
    }
    h3 {
      font-size: 1rem;
      margin: .2rem 0;
    }
    ul {
      align-self: flex-start;
      list-style: none;
      li {
        a {
          /* word-wrap: none; */
          /* color: red; */
        }
      }
    }
  }
  ${mediaQueries.desktop_up`
    .project-info {

      flex-direction: row;
      img {
        /* width: 100%; */
      }
      .project-description {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
      }
    }
  `}
`

const ProjectModal = ({ setModalOpen, modalInfo }) => {
  console.log(`modalInfo`, modalInfo)
  return (
    <ProjectModalContainer>
      <AiOutlineCloseSquare onClick={setModalOpen} />
      <h2>{modalInfo.name}</h2>
      <div className="project-info">


        <img src={modalInfo.imageLink} alt={modalInfo.name} />
        <div className="project-description">

          {modalInfo.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {modalInfo.liveLink.length > 1 && (
            <a href={modalInfo.liveLink} target="_blank">
              <h3>Live Link:</h3>
              {modalInfo.liveLink}
            </a>
          )}
          {modalInfo.githubLinks.length > 0 && (
            <ul>
              <h3>GitHub Link{modalInfo.githubLinks.length === 1 ? "" : "s"}:</h3>
              {modalInfo.githubLinks.map((item, index) => (
                <li>
                  <a key={index} href={item} target="_blank">
                    {item}
                  </a>
                </li>

              ))}

            </ul>
          )}
        </div>
      </div>
    </ProjectModalContainer>
  )
}

export default ProjectModal
