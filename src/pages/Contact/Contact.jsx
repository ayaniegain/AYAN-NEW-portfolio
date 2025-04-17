import React, { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contact from "../../assets/img/contact.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      } else {
        toast.success("Your Message Sent Successfully");
        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const lightSpeedVariants = {
    initial: { x: -100, skewX: 20, opacity: 0 },
    animate: { x: 0, skewX: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.9] },
  };

  return (
    <div
      className="w-full min-h-[500px] flex justify-center items-center px-4 py-8 bg-gray-50"
      id="contact"
    >
       <ToastContainer />
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full max-h-[600px]">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 p-4">
          <motion.img
            src={contact}
            alt="contact"
            className="w-[250px] h-[250px] object-cover rounded-xl shadow-md"
            initial={lightSpeedVariants.initial}
            animate={lightSpeedVariants.animate}
            transition={lightSpeedVariants.transition}
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mb-6 gap-5">
            <h6 className="text-xl font-semibold text-gray-800">Contact With</h6>
            <a href="https://www.linkedin.com/in/ayangx/">
              <BsLinkedin className="text-blue-600 hover:text-blue-800" size={28} />
            </a>
            <a href="https://github.com/ayaniegain">
              <BsGithub className="text-blue-600 hover:text-blue-800" size={28} />
            </a>
            <a href="mailto:ayaniegain@gmail.com">
              <MdEmail className="text-blue-600 hover:text-blue-800" size={32} />
            </a>
          </div>

          <div className="flex items-center my-4 w-full max-w-lg">
            <div className="h-px w-full bg-gray-300"></div>
            <span className="mx-4 text-sm font-semibold text-gray-500">OR</span>
            <div className="h-px w-full bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full max-w-lg p-3 border border-gray-200 rounded-lg mb-4 text-teal-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-full max-w-lg p-3 border border-gray-200 rounded-lg mb-4 text-teal-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="msg"
              placeholder="Write your message"
              className="w-full max-w-lg p-3 border border-gray-200 rounded-lg mb-4 text-teal-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 h-28 resize-none bg-gray-50 shadow-sm"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full max-w-lg bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;