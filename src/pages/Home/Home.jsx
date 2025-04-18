import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Resume from "../../assets/docs/Ayan_Biswas_Developer.pdf";
import { useTheme } from "../../context/ThemeContext.jsx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import cover from "../../assets/img/cover.jpg"

function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const [text] = useTypewriter({
    words: ['Front-End Developer', 'React JS Developer', 'Software Engineer', 'Full-stack Engineer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const fadeRightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeBottomVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  };

  return (
    <div
      className="min-h-[400px] bg-black text-white px-[10%] md:px-[15%] font-poppins flex items-center justify-center relative"
      id="home"
    >
      <img
        src={cover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="flex flex-col gap-10 relative w-full max-w-4xl z-10">
        <div
          className="fixed right-4 md:right-6 top-11 md:top-8 flex items-center justify-center w-12 h-12 bg-[#1e1e1e] rounded-lg cursor-pointer shadow-lg hover:bg-[#2e2e3e] transition-colors duration-300 z-50"
          onClick={handleTheme}
        >
          {theme === "light" ? (
            <BsFillMoonStarsFill size={24} className="text-gray-200" />
          ) : (
            <BsFillSunFill size={24} className="text-yellow-400" />
          )}
        </div>

        <motion.div
          initial={fadeRightVariants.initial}
          animate={fadeRightVariants.animate}
          transition={fadeRightVariants.transition}
          className="pt-16 md:pt-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl md:text-start text-center font-semibold mb-4 text-gray-100 tracking-tight">
            Hello 👋, I am AYAN BISWAS
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0b50f] md:text-start text-center tracking-wide mb-6">
            <span>{text}</span>
            <Cursor cursorColor="brown" />
          </h1>
        </motion.div>

        <motion.div
          className="mt-10 space-y-6"
          initial={fadeBottomVariants.initial}
          animate={fadeBottomVariants.animate}
          transition={fadeBottomVariants.transition}
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              className="inline-block bg-[#3b8ff3] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-[#3b8ff3] transition-all duration-500 w-full sm:w-48 text-center shadow-md hover:shadow-lg"
              href="https://api.whatsapp.com/send?phone=9066357988"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="inline-block bg-[#f29f67] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-opacity-80 transition-all duration-500 w-full sm:w-48 text-center shadow-md hover:shadow-lg"
              href={Resume}
              download="Ayan_Biswas_Developer.pdf"
            >
              My Resume
            </a>
          </div>
          <div className="flex flex-col gap-2 md:text-start text-center " style={{marginTop:"12px"}}>
            <p className="text-gray-200 font-medium text-base md:text-lg mt-4">
              Email: ayaniegain@gmail.com
            </p>
            <p className="text-gray-200 font-medium text-base md:text-lg">
              Phone: 9066357988
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;