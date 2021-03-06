export const routeAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: .1
    }
  }

}


export const variants = {
  hidden: {
    opacity: 0,
    // y: -1000,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: .4
    }
  },
  visibleInstructions: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.5
    }

  }
  
};

export const bounceTransition = {
  y: {
    duration: .4,
    yoyo: Infinity,
    ease: "easeOut"
  },

};

export const pageVariants = {
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
  pageExit: {
    background: "black",
    // filter: "invert()",
    opacity: 0
  }
}

export const programmingContVariants = {
  hidden: { opacity: 0, backgroundColor: "", y: 100 },
  show: {
    opacity: 1,
    // backgroundColor: "blue",
    transition: {
      staggerChildren: 3.5,
      duration: 1
    },
    y: 0
  },

}

export const progLangVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}