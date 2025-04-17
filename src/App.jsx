import Layout from "./components/layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Education from "./pages/Educations/Educations.jsx";
import WorkExp from "./pages/workExp/WorkExp.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.jsx";
import MobileNav from "./components/MobileNav/MobileNav.jsx";
import { useState, useEffect } from "react";

import loading from "../public/Animation.gif";

function App() {
  const [theme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (e.g., for 1 second)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Adjust the delay as needed

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);

  if (!isLoading) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen w-full ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        {/* <img
          src={loading}
          alt="Loading..."
          className="w-48 max-w-[80%] object-contain"
        /> */}
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "bg-lime-800 text-white" : "bg-white text-black"}`}>
      <MobileNav />
      <Layout />
      <div className="container mx-auto px-4">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
        <div className="footer pb-3 ms-3">
          <marquee width="60%" direction="right">
            <h4>Made With 😍 Ayan Biswas © 2025</h4>
          </marquee>
        </div>
        <ScrollToTop smooth color="#6f00ff" />
      </div>
    </div>
  );
}

export default App;