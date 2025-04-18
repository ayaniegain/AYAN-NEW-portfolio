import React from "react";
import { motion } from "framer-motion";
import profilepic from "../../assets/img/profile.png";

const About = () => {
  const boxVariants = {
    initial: { scale: 0.8, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 },
  };

  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.2 },
  };

  const techStack = [
    { name: "React", color: "text-cyan-500" },
    { name: "Redux", color: "text-purple-500" },
    { name: "React Query", color: "text-red-500" },
    { name: "Framer Motion", color: "text-pink-500" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Socket.io", color: "text-yellow-500" },
    { name: "Express.js", color: "text-gray-500" },
    { name: "Next.js", color: "text-black" },
  ];

  return (
    <motion.div
      className="mx-40 my-12 px-4 sm:px-8 min-h-[600px] flex items-center justify-center"
      initial={boxVariants.initial}
      animate={boxVariants.animate}
      transition={boxVariants.transition}
    >
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-20 w-full max-w-7xl">
        <div className="md:w-1/2 p-6 md:p-8">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={profilepic}
              alt="profile_pic"
              className="w-full h-[300px] md:h-[400px] object-cover bg-amber-200 rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-8 space-y-8">
          <motion.h1
            className="text-3xl md:text-4xl font-cursive text-gray-600 dark:text-gray-300 border-b-2 border-gray-600 dark:border-gray-300 text-center mb-8"
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={textVariants.transition}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-gray-700 dark:text-gray-200 text-center text-sm md:text-base font-lucida hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {["I'm a passionate Frontend & Fullstack Developer", "with 1.5+ years of experience,", "skilled in building dynamic, AI-driven web applications."].map((text, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {text + ' '}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I specialize in React, Redux, React Query, Framer Motion, MongoDB, Socket.io, Express.js, and Next.js. With hands-on experience in both startup and product-based environments, I've contributed to impactful projects like an eCommerce platform and a book management system. I love exploring new technologies and have a strong interest in AI, always striving to deliver seamless and engaging user experiences.
            </motion.span>
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3 md:gap-4 justify-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ ...textVariants.transition, delay: 1 }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium ${tech.color} bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
        </div>
    </motion.div>
  );
};

export default About;