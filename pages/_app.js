import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Layout from "../components/Layout";
import { pageVariants } from "../animations"


import "./app.css";
const App = ({ Component, pageProps, router }) => {
  const { height } = useWindowSize();

  return (
    <AnimatePresence>
       <motion.div>

        <Layout windowHeight={height} 
        initial="pageInitial" 
        animate="pageAnimate" 
        variants={pageVariants}
        >
          <Component {...pageProps} key={router.route} />
        </Layout>
       </motion.div>
     </AnimatePresence>
  )
};

export default App;
