import React from "react";
import "./About.css";
import profilepic from "../../assets/img/profile.png";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  // Animation variants for the Jump effect
  const jumpVariants = {
    initial: {
      scale: 0.8, // Start slightly scaled down
      y: 50, // Start 50px below
      opacity: 0, // Start invisible
    },
    animate: {
      scale: 1, // Scale to normal size
      y: 0, // Move to original position
      opacity: 1, // Fade in
    },
    transition: {
      type: "spring", // Spring transition for bouncy effect
      stiffness: 100, // Controls bounciness (higher = less bounce)
      damping: 10, // Controls oscillation (lower = more bounce)
      duration: 0.6, // Total animation duration
    },
  };

  return (
    <>
      <motion.div
        className="about"
        id="about"
        initial={jumpVariants.initial}
        animate={jumpVariants.animate}
        transition={jumpVariants.transition}
      >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilepic} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am a highly skilled and motivated BE Computer Science graduate
              with 1.1 years of experience in frontend technology. Proficient in
              HTML, CSS, Bootstrap, JavaScript, TypeScript, and ES6, I have a
              strong understanding of ReactJS, Redux, and Angular. My passion
              for creating intuitive and visually appealing user interfaces is
              complemented by excellent communication and collaboration skills,
              making me an effective team player. With a drive for innovation
              and a keen eye for detail, I am committed to delivering
              exceptional user experiences and contributing to the success of
              any project I undertake. I am eager to embark on new challenges
              and actively seeking opportunities to apply my technical expertise
              and creativity in a rewarding professional environment.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;