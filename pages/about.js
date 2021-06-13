import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { profile } from "../content/content";
import { colors } from "../siteColors";



const AboutPage = styled(motion.main)`
  /* padding-top: 10rem; */

  /* border: 1px solid black; */
  * {

  /* border: 1px solid black; */
  }
  .cat-container {
    background: red;
    display: flex;
    justify-content: center;
    margin: 10rem 0 0rem;
    width: 100%;
    .cat {
      width: 100%;

      }
    }
    h1 {
      margin: 1rem 0;
    }
  article {
      display: grid;
      /* align-items: center; */
      position: relative;
    .image-container {
      /* background: red; */
      display: flex;
      justify-content: center;
      margin: 0 0 1rem;
      width: 100%;
      .cat {
        width: 100%;

      }
    }
    .profile {
      width: 10rem;
      overflow: hidden;
      height: 10rem;
      border-radius: 10rem;
      /* position: absolute; */
      /* top: 75%; */
      /* bottom: 0; */
      /* left: 50%; */
      /* transform: translate(-50%, 0%); */
      margin: 1rem auto;
    }
  }
`;


const About = () => {
  console.log(`here~!!!`)
  return (
    <AboutPage>
      <div className="cat-container">
        <img src="/catCoding.webp" alt="cat coding" className="cat" />
      </div>
      <h1>Profile</h1>
      <article>
        {profile.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
        <div className="image-container profile">
          <img src="/juli.jpg" alt="juli's face" />
        </div>
      </article>
    </AboutPage>
  )
};

export default About;
