import styled from '@emotion/styled';
import Head from 'next/head'
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';
import mediaQueries from "../utils/mediaQueries.ts";



const DevLogo = styled.p`
  font-family: sans-serif;
  font-size: 20rem;
  font-weight: 900;
  letter-spacing: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: lightgray;
  opacity: .1;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  z-index: 0;

`;
const hash = "</>";
console.log(`mediaQueries.phone`, mediaQueries.phone)

const Header = () => {
  return (
    <div>
      <Head>
        <title>Julian Bustos</title>
        <meta name="description" content="Julian Bustos Portfolio" />
        <link rel="icon" href="/juli.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Play&family=Russo+One&display=swap" rel="stylesheet" />
      </Head>
      <DevLogo >{hash} </DevLogo>
      <BurgerMenu />
      <Navbar />
    </div>
  )
};

export default Header;
