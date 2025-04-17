import React from "react";
import project1 from "../../assets/project-img/1_movie_app.jpg";
import project2 from "../../assets/project-img/2_node_taking_app.png";
import project3 from "../../assets/project-img/3_resort_vally_project.png";
import project4 from "../../assets/project-img/4_ecommerce.png";
import project5 from "../../assets/project-img/5_crome_extention.png";
import project6 from "../../assets/project-img/6_hardware store.png";
import project7 from "../../assets/project-img/7_blog_post.png";
import project8 from "../../assets/project-img/8_mytube clone.png";
import project9 from "../../assets/project-img/9_youtube_analycis.png";
import project10 from "../../assets/project-img/10_student_database.png";
import { motion } from "framer-motion";

const Projects = () => {
  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation with spring-based jello-like effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center" id="projects">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-teal-600 mb-8 uppercase">
        Top Recent Projects
      </h2>
      <hr className="w-48 sm:w-64 lg:w-96 mx-auto mb-10 border-2 border-teal-600" />
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 font-sans text-sm sm:text-base">
        Built multiple full-stack and frontend applications including a YouTube Clone, Task Manager, Admin Dashboard, E-commerce Site, Figma-to-React Converter, Games, Movie App, and Blog App. Used technologies like React.js, Redux, Node.js, MongoDB, and Socket.IO. Implemented features like real-time updates, user authentication, and API integration to create responsive and interactive user experiences.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Project Card 1 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project1} alt="Movie Search App" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React", "Context", "Router", "Bootstrap"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Movie Search App
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Search and explore movies with ease</p>
              <a
                href="https://movie-application-search.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Fullstack
              </span>
              <img src={project2} alt="Note Taking App" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React", "Javascript", "Firebase"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Note Taking App
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Organize notes with real-time syncing</p>
              <a
                href="https://notetakingappreact.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 3 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project3} alt="Resort Valley Website" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React", "Context", "Router", "Bootstrap"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Resort Valley Website
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">A responsive resort booking platform</p>
              <a
                href="https://resortvalley.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 4 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project4} alt="E-commerce Site" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React.js", "Redux", "useReducer", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                E-commerce Site
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Shop online with ease and style</p>
              <a
                href="https://elitemartsd.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 5 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project5} alt="Chrome Extension" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React.js", "Hooks", "useReducer", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Chrome Extension
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Enhance your browsing experience</p>
              <a
                href="https://ui-dark-there.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 6 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project6} alt="Hardware Store" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["Figma to React", "React"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Hardware Store
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Figma to React converted store UI</p>
              <a
                href="https://task-project-p.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 7 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Fullstack
              </span>
              <img src={project7} alt="Blog Application" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["Node.js", "Express", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Blog Application
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Create and share your blog posts</p>
              <a
                href="https://mern-blog-me.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 8 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project8} alt="YouTube Clone" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React.js", "Tailwind", "useContext", "YouTube API"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                YouTube Clone
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Stream videos like on YouTube</p>
              <a
                href="https://bright-kleicha-8766cc.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 9 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project9} alt="YouTube Analytics" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React.js", "YouTube API", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                YouTube Analytics
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Analyze YouTube data live</p>
              <a
                href="https://tubemade-st.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 10 */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl transition-all duration-1000 max-w-sm w-full m-4 sm:m-6">
            <div className="relative flex justify-center">
              <span className="absolute -top-5 left-4 bg-orange-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                Frontend
              </span>
              <img src={project10} alt="Student Project" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-4 bg-gray-100 px-4">
              {["React.js", "Form Handling"].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 text-black text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h6 className="text-base sm:text-lg font-semibold text-gray-800 uppercase mb-2">
                Student Project
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">Manage student data efficiently</p>
              <a
                href="https://alumenai.netlify.app/"
                className="inline-block bg-teal-600 text-white font-medium px-8 py-3 rounded-full uppercase w-40 h-12 leading-9 mx-auto hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600 hover:shadow-2xl transition-all duration-500"
              >
                View
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;