import Layout from "./components/layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Education from "./pages/Educations/Educations.jsx";
import WorkExp from "./pages/workExp/WorkExp.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./utils/ScrollVelocity.jsx";
import SplashCursor from './utils/SplashCursor.jsx'


import loading from "../public/Animation.gif";
import Home from "./pages/Home/Home.jsx";

function App() {
  const [theme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={loading}
            alt="Loading..."
            className="w-64 object-contain rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    );
  }
  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-gray-800 text-blue-300" : "bg-white text-black"
      }`}
    >
      {/* Container: layout + content + footer */}
      <div className="flex flex-col min-h-screen">
        {/* Layout at the top */}
        <div className="bg-gray-100 dark:bg-black p-4">
          <Layout />
        </div>

        {/* Content in between */}
        <div className="p-4 space-y-16 gap-6 flex flex-col">

<SplashCursor />
          <Home />
          <ScrollVelocity
            texts={[
              "Welcome to My Portfolio Ayan Biswas",
              "React JS Node JS Tailwind CSS HTML React Bits",
             
            ]}
            velocity={100}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            parallaxClassName={`py-10 text-center ${
              theme === "dark" ? "bg-green-950" : "bg-red-100"
            } rounded-lg shadow-md`}
            scrollerClassName={`${
              theme === "dark" ? "text-green-400" : "text-green-700"
            }`}
          />
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>

        {/* Footer at the bottom */}
        <footer className="bg-gray-200  text-center py-4">
          <marquee width="60%" direction="right">
            <h4>Made With 😍 Ayan Biswas © 2025</h4>
          </marquee>
        </footer>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop
        smooth
        color="#6f00ff"
        className="flex items-center justify-center"
      />
    </div>
  );
}

export default App;