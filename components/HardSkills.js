import styled from "@emotion/styled";
import { hardSkills } from "../content/content";
import { DesktopList } from "./components";


const HardSkillWrapper = styled.article``;



const HardSkills = ({ device }) => {

  return (
    <HardSkillWrapper>
    <h2>Skills</h2>
      <DesktopList device={device}>
        {hardSkills.map((skill, index) => (
          <li key={index}>
            {/* <ToolTip text={skill.name}> */}
              <div>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            {/* </ToolTip> */}
          </li>
        ))}
      </DesktopList>
      {/* )} */}
    </HardSkillWrapper>
  )
};

export default HardSkills;
