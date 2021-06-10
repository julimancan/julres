import styled from "@emotion/styled";


export const TopScrollBar = styled.div`
  /* color: white; */
  background: white;
  /* width: 100%; */
  height: 10px;
  position: fixed;
  z-index: 100;
  width: ${({ scrollYProgress }) => scrollYProgress ? scrollYProgress : 0}vw;
`