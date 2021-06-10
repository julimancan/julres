import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { profile } from "../content/content";
import { colors } from "../siteColors";



const AboutPage = styled(motion.main)`

  /* border: 1px solid black; */
  * {

  /* border: 1px solid black; */
  }
    h1 {
      margin-bottom: 2rem;
    }
  article {
      display: grid;
      /* align-items: center; */

    .image-container {
      /* background: red; */
      display: flex;
      justify-content: center;
      margin: 0 0 1rem;
    }
  }
`;


const About = () => {
  console.log(`here~!!!`)
  return (
    <AboutPage>
      <h1>Here's a few things to know about me</h1>
      <article>
      <div className="image-container">
      <img src="/catCoding.webp" alt="cat coding"/>
      </div>
        {profile.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
      </article>
    </AboutPage>
  )
};

export default About;
