import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { profile } from "../content/content";

import mediaQueries from "../utils/mediaQueries.ts";


const AboutPage = styled(motion.main)`
  /* padding-top: 10rem; */
  /* margin-top: 5rem; */

  /* border: 1px solid black; */
  * {

  /* border: 1px solid black; */
  }
  .cat-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0 0rem;
    /* width: 100%; */
    max-height: 200px;
    /* background: red; */
    .cat {
      /* width: 100%; */
      max-width: 250px;

      }
    }
    h1 {
      margin: 1rem 0;
    }
  article {
      display: grid;
      /* align-items: center; */
      position: relative;

      
  }
    .image-container {
      /* background: red; */
      display: flex;
      justify-content: center;
      margin: 1rem;
      width: 100%;
      min-width: 150px;
      position: relative;
    }
    .profile {
      /* margin-top: 5rem; */
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
    ${mediaQueries.desktop_medium_up`
        article {
          display: flex;
          p {
            margin: 1rem 5rem;
           }
        }
      `}
`;


const About = () => {
  return (
    <AboutPage>
      <h1>Profile</h1>


      <article>
        <div className="image-container profile">
          <img src="/juli.jpg" alt="juli's face" />
        </div>
        <div >
          {profile.map((paragraph, index) => (
            <p key={index}>{paragraph} <br /></p>

          ))}
        </div>

      </article>
      <div className="cat-container">

        <img src="/catCoding.webp" alt="cat coding" className="cat" />
      </div>
    </AboutPage>
  )
};

export default About;
