import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import { motion } from "framer-motion"; // Import Framer Motion
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("PLease Provide all fields");
        alert("PLease Provide all fields");
      } else {
        alert("Your Message Send Successfully");
        setname("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Animation variants for the LightSpeed effect
  const lightSpeedVariants = {
    initial: {
      x: -100, // Start 100px to the left
      skewX: 20, // Slight skew for dynamic effect
      opacity: 0, // Start invisible
    },
    animate: {
      x: 0, // Move to original position
      skewX: 0, // Straighten out
      opacity: 1, // Fade in
    },
    transition: {
      duration: 0.6, // Fast animation to match LightSpeed
      ease: [0.6, -0.05, 0.01, 0.9], // Custom easing for smooth, dynamic motion
    },
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.img
                    src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1691082964~exp=1691083564~hmac=deafa8a7e57a39f0729ea196ef5676f680e5d32ebb7af0184bdf19a8bd898ec2"
                    alt="contact"
                    className="image"
                    initial={lightSpeedVariants.initial}
                    animate={lightSpeedVariants.animate}
                    transition={lightSpeedVariants.transition}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a href="https://www.linkedin.com/in/ayangx/">
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://github.com/ayaniegain">
                        <BsGithub color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="mailto: ayaniegain@gmail.com">
                        <MdEmail color="blue" size={35} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      required
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;