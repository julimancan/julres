import HardSkills from '../components/HardSkills';
import ProgrammingLanguages from '../components/ProgrammingLanguages';
import { useWindowScroll, useWindowSize } from "react-use";
import styled from '@emotion/styled';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { routeAnimation, variants, bounceTransition } from '../animations';
import Projects from '../components/Projects';
import { deviceUsed } from '../utils/getDevice';
import mediaQueries from '../utils/mediaQueries.ts';


const HomePage = styled(motion.main)`
  
  * {
    /* border: 1px solid black; */
  }
  article {
    margin: 1rem 0 0;
    /* background: yellow; */
    width: 100%;
  }
  ${mediaQueries.desktop_up`
  `}
`;




const LandingPage = styled.section`
  height: 50vh;
  margin-top: 10rem;
  width: 100%;
  /* background: red; */
  display: grid;
  justify-content: center;
  align-items: center;
  /* padding: 0 3rem; */
  * {
    /* border: 1px solid black; */
  }
  
`;

const BouncyArrow = styled(motion.div)`
  /* border: 1px solid black; */
  display: inline-flex;
  margin-left: 1ch;
  /* font-size: 10rem; */
`;




export default function Home() {
  const homepageRef = useRef(null);
  // screen size:
  const { width } = useWindowSize();

  const device = deviceUsed(width);

  
  //scroll position:
  const { y } = useWindowScroll();

  
  return (
    <HomePage
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      ref={homepageRef}
    >
      <LandingPage
        // initial="hidden"
        // animate="visible"
      >

        <motion.h1
        initial="hidden"
        animate="visible"

          variants={variants}
          
        >
          Hola! I'm Julian Bustos
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={`${"visibleInstructions"}`}

          variants={variants}

        >
          <span>scroll slowly
          <BouncyArrow
              transition={bounceTransition}
              animate={{
                y: ["5%", "-25%"],
                // filter: [
                //   "hue-rotate(0) contrast(100%)",
                //   "hue-rotate(360deg) contrast(200%)",
                //   "hue-rotate(45deg) contrast(300%)",
                //   "hue-rotate(0deg) contrast(100%)",
                // ]
              }}
            >

              <AiOutlineArrowDown

              />
            </BouncyArrow>
          </span>

        </motion.div>

        <motion.div
          initial="hidden"
          animate={`${y > 50 && "visible"}`}
          // animate={`visible`}
          variants={variants}
        >
          <h2>I am a full-stack web developer</h2>
          <p>I have been building React Aps for a long time if you consider a year to be a long time 😊</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={`${y > 100 && "visible"}`}
          variants={variants}
        >
          <p>However in this short amount of time I've been able to be part of some very cool projects and collaborate with some awesome devs</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={`${y > 150 && "visible"}`}
          variants={variants}
        >
          <p>I have experience in a few programming languages:</p>
        </motion.div>
      {/* {y} */}
      </LandingPage>


      <motion.article
        initial="hidden"
        animate={`${y > 200 && "visible"}`}
        variants={variants}
        id="projects"
      >
           <ProgrammingLanguages
        />
      </motion.article>
      {/* <HardSkills device={device}/> */}
            
      <motion.article
        initial="hidden"
        animate={`${y > 250 && "visible"}`}
        // animate={`${device === "desktop" ? y > 400 && "visible" : device === "tablet" ? y > 630 && "visible" : y > 200 && "visible" }`}
        variants={variants}
      >
            <motion.div
          initial="hidden"
          animate={`${"visible"}`}
          variants={variants}
        >
          <p>And here you can checkout some of my favourite projects:</p>
        </motion.div>
           <Projects device={device}/>

      </motion.article>
        

    </HomePage>
  )
}

