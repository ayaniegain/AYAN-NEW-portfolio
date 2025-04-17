import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Resume from "../../assets/docs/Ayan_Biswas_Developer.pdf";
import "./home.css";
import { useTheme } from "../../context/ThemeContext.jsx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion"; // Import Framer Motion

function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const [text] = useTypewriter({
    words: ['Front-End Developer', 'React JS Developer', 'Software Engineer','Full-stack Engineer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  // Animation variants for Fade effects
  const fadeRightVariants = {
    initial: {
      x: 100, // Start 100px to the right
      opacity: 0, // Start invisible
    },
    animate: {
      x: 0, // Move to original position
      opacity: 1, // Fade in
    },
    transition: {
      duration: 0.8, // Smooth animation
      ease: "easeOut", // Smooth easing
    },
  };

  const fadeBottomVariants = {
    initial: {
      y: 100, // Start 100px below
      opacity: 0, // Start invisible
    },
    animate: {
      y: 0, // Move to original position
      opacity: 1, // Fade in
    },
    transition: {
      duration: 0.8, // Smooth animation
      ease: "easeOut", // Smooth easing
      delay: 0.2, // Slight delay for staggered effect
    },
  };

  return (
    <div className="container-fluid home-container mx-30" id="home " >
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      <div className="mx-40">
        <motion.div
          initial={fadeRightVariants.initial}
          animate={fadeRightVariants.animate}
          transition={fadeRightVariants.transition}
        >
          <h2>Hello 👋, I am AYAN BISWAS</h2>
          <h1>
            <span>{text}</span>
            <Cursor cursorColor="brown" />
          </h1>
        </motion.div>

        <motion.div
          className="home-buttons"
          initial={fadeBottomVariants.initial}
          animate={fadeBottomVariants.animate}
          transition={fadeBottomVariants.transition}
        >
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=9066357988"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="btn btn-cv" href={Resume} download="Ayan_Biswas_Developer.pdf">
            My Resume
          </a>
          <p className="mydetails">Email: ayaniegain@gmail.com</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;