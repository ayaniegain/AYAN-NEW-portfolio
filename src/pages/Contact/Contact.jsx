import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contact from "../../assets/img/contact.jpg";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please fill in all fields");
      } else {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const lightSpeedVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-100 to-gray-200"
      id="contact"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center p-8 bg-gray-50"
          initial={lightSpeedVariants.initial}
          animate={lightSpeedVariants.animate}
          transition={lightSpeedVariants.transition}
        >
          <img
            src={contact}
            alt="Contact illustration"
            className="w-full max-w-sm h-auto rounded-xl shadow-md object-cover"
          />
        </motion.div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/ayangx/"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <BsLinkedin size={28} />
            </a>
            <a
              href="https://github.com/ayaniegain"
              aria-label="GitHub"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <BsGithub size={28} />
            </a>
            <a
              href="mailto:ayaniegain@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <MdEmail size={32} />
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-4 text-sm font-medium text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
              />
            </div>
            <div>
              <textarea
                name="msg"
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400 h-32 resize-none"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
                aria-label="Message"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;