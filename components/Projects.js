import styled from "@emotion/styled";
import { bounceTransition } from "../animations";
import { projects } from "../content/content";
import { colors } from "../siteColors";
import mediaQueries from "../utils/mediaQueries.ts";
import ToolTip from "./ToolTip";


const ProjectWrapper = styled.section`
  /* border: 1px solid black; */
  width: 100%;
  margin-top: 3rem;
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    width: 100%;
    list-style: none;
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-columns: 1fr 1fr; */
    /* padding: 0; */
    gap: 1rem;
    li {
      /* border: 1px solid black; */
      border-radius: 2.5px;
      /* margin: 1rem; */
      padding: 1rem;
      cursor: pointer;
      background: ${colors.projectCardBackground};
      /* width: 45%; */
      h3 {
        color: ${colors.projectCardTitle};
        margin-bottom: .25rem;
      }
      div{
        /* width: 300px; */
        /* height: 225px; */
        /* background: red; */
        img {
          /* object-fit: cover; */
          /* width: 100%; */
          /* max-width: 770px; */
        }
      }
    }
  }
  ${mediaQueries.desktop_up`
    ul {
      grid-template-columns: repeat(2, 1fr)
    }
  `}
`;

const Projects = () => {
  return (
    <ProjectWrapper>
      <h2>Featured Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <ToolTip
            key={index}
            // transition={bounceTransition}
            //   animate={{
            //     y: ["5%", "-25%"],
            //     filter: [
            //       "hue-rotate(0) contrast(100%)",
            //       "hue-rotate(360deg) contrast(200%)",
            //       "hue-rotate(45deg) contrast(300%)",
            //       "hue-rotate(0deg) contrast(100%)",
            //     ]
            //   }}
            content="click for more info"
            direction="top"
            
         >
            <li>
              <h3>
                {project.name}
              </h3>

                <img 
                  src={project.imageLink} 
                  alt={project.name} 
                  // height={200} 
                  width={"100%"} 
                    // layout={"fill"}
                  />
            </li>
          </ToolTip>
        ))}
      </ul>
    </ProjectWrapper>
  )
};

export default Projects;
