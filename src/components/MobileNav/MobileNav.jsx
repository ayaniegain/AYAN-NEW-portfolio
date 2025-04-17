import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Handle open/close menu
  const handleOpen = () => {
    setOpen(!open);
  };

  // Handle menu item clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  // Menu animation variants
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };

  // Menu item animation variants
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="fixed top-0  w-full z-50 md:hidden">
      <div className="flex items-center  justify-between h-14 w-full bg-gradient-to-r from-gray-900 to-gray-800 px-4 shadow-lg pb-2">
        <span className="text-orange-400 font-bold text-xl tracking-wide ">
          My Portfolio
        </span>
        {open ? (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AiOutlineMenuFold
              size={30}
              className="text-white cursor-pointer"
              onClick={handleOpen}
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <GiHamburgerMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={handleOpen}
            />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-64 bg-gray-900/95 backdrop-blur-sm p-4 pt-6 shadow-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-5 ">
              {[
                { to: "home", icon: <FcHome size={24} />, text: "Home" },
                { to: "about", icon: <FcAbout size={24} />, text: "About" },
                {
                  to: "education",
                  icon: <FcReadingEbook size={24} />,
                  text: "Education",
                },
                {
                  to: "techstack",
                  icon: <FcBiotech size={24} />,
                  text: "Tech Stack",
                },
                {
                  to: "projects",
                  icon: <FcVideoProjector size={24} />,
                  text: "Projects",
                },
                {
                  to: "work",
                  icon: <FcPortraitMode size={24} />,
                  text: "Work Experience",
                },
                {
                  to: "contact",
                  icon: <FcBusinessContact size={24} />,
                  text: "Contact",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                    className="flex items-center gap-3 text-gray-200 text-lg font-medium py-2 px-3 rounded-md hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;