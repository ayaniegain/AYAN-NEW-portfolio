import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import profilepic from "../../assets/img/profile_pic.png";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

function Menus() {
  const [toggle, setToggle] = useState(false);

  // Handle toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Animation variants for reusability
  const zoomVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const fadeVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  // Sidebar width animation
  const sidebarVariants = {
    expanded: { width: "16rem" }, // 256px
    collapsed: { width: "5rem" }, // 80px
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen bg-gray-900/95 backdrop-blur-sm shadow-xl flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800"
      variants={sidebarVariants}
      initial="expanded"
      animate={toggle ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex w-full justify-end px-4 pt-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {toggle ? (
            <GiHamburgerMenu
              size={24}
              className="text-white cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <AiOutlineMenuFold
              size={24}
              className="text-white cursor-pointer"
              onClick={handleToggle}
            />
          )}
        </motion.div>
      </div>

      {!toggle ? (
        <>
          <motion.div
            className="mt-12 h-[150px] w-[150px] rounded-full overflow-hidden shadow-[3px_3px_10px_rgba(0,0,0,1)] bg-white transition-transform duration-1000 hover:-translate-x-[1px] hover:rotate-y-180"
            initial={zoomVariants.initial}
            animate={zoomVariants.animate}
            transition={zoomVariants.transition}
          >
            <img
              src={profilepic}
              alt="profile pic"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-center gap-3 mt-10 w-full px-6">
            {[
              { to: "home", icon: <FcHome size={24} />, text: "Home", delay: 0.1 },
              { to: "about", icon: <FcAbout size={24} />, text: "About", delay: 0.2 },
              {
                to: "education",
                icon: <FcReadingEbook size={24} />,
                text: "Education",
                delay: 0.3,
              },
              {
                to: "techstack",
                icon: <FcBiotech size={24} />,
                text: "Tech Stack",
                delay: 0.4,
              },
              {
                to: "projects",
                icon: <FcVideoProjector size={24} />,
                text: "Projects",
                delay: 0.5,
              },
              {
                to: "work",
                icon: <FcPortraitMode size={24} />,
                text: "Work Experience",
                delay: 0.6,
              },
              {
                to: "contact",
                icon: <FcBusinessContact size={24} />,
                text: "Contact",
                delay: 0.7,
              },
            ].map((item) => (
              <motion.div
                key={item.to}
                className="w-full"
                initial={fadeVariants.initial}
                animate={fadeVariants.animate}
                transition={{ ...fadeVariants.transition, delay: item.delay }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="bg-orange-500/20 border-l-4 border-orange-500 text-orange-400 pl-3"
                  className="flex items-center gap-3 h-10 w-full text-white text-lg font-medium hover:text-orange-400 hover:bg-orange-500/10 rounded-md transition-all duration-300 no-underline px-3"
                >
                  {item.icon}
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 mt-10 w-full">
          {[
            { to: "home", icon: <FcHome size={25} /> },
            { to: "about", icon: <FcAbout size={25} /> },
            { to: "education", icon: <FcReadingEbook size={25} /> },
            { to: "techstack", icon: <FcBiotech size={25} /> },
            { to: "projects", icon: <FcVideoProjector size={25} /> },
            { to: "work", icon: <FcPortraitMode size={25} /> },
            { to: "contact", icon: <FcBusinessContact size={25} /> },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              activeClass="bg-orange-500/20 border-l-4 border-orange-500 text-orange-400 pl-3"
              className="flex items-center justify-center h-10 w-full text-white hover:text-orange-400 hover:bg-orange-500/10 rounded-md transition-all duration-300 no-underline"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Menus;