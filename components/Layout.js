import styled from "@emotion/styled";
import { useMeasure, useWindowScroll, useWindowSize } from "react-use";
import { colors } from "../siteColors";
import { deviceUsed } from "../utils/getDevice";
import mediaQueries from "../utils/mediaQueries.ts";
import Header from "./Header";
import { TopScrollBar } from "./TopScrollBar";



const LayoutWrapper = styled.div`


  main {
    background: black;
    background: ${colors.background};
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.textColor};
    padding: 3rem 4ch 3rem;
    opacity: 1;
    font-family: 'Play', sans-serif;
    * {
    /* border: 1px solid black; */
  }
    h1 {
      font-size: 1.5rem;
      white-space: nowrap;
      font-family: 'Russo One', sans-serif;
    }
    ${mediaQueries.phablet_up`
      padding: 0 6ch 3rem;
      h1 {
        font-size: 2rem
      }
    `}
    ${mediaQueries.desktop_up`
      h1 {
        font-size: 3rem
      }
    `}

  }
  `


const Layout = ({ children, windowHeight }) => {
  let [layoutRef, { height }] = useMeasure();
  const { y } = useWindowScroll()
  const layoutHeight = height;
  const { width } = useWindowSize();

  const device = deviceUsed(width);


  const scrollDistance = layoutHeight - windowHeight;

  const scrollPercentage = y ? y/scrollDistance*100 : 0


  // const { height } = useWindowSize();

  return (
    <LayoutWrapper ref={layoutRef} device={device} >
      <Header device={device} />
      <TopScrollBar scrollYProgress={scrollPercentage} />
      {children}

    </LayoutWrapper>
  )
}

export default Layout
