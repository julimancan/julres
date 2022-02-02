import Head from 'next/head'
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Julian Bustos</title>
        <meta name="description" content="Julian Bustos Portfolio" />
        <link rel="icon" href="/juli.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Play&family=Russo+One&display=swap" rel="stylesheet" />
        <script async defer data-website-id="a314cee8-3dd4-43ab-bdf8-3349f35dc42e" src="https://analytics-julimancan.vercel.app/umami.js"></script>
      </Head>
      <BurgerMenu />
      <Navbar />
    </div>
  )
};

export default Header;
