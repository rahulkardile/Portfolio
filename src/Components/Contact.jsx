import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center gap-3 m-auto w-[80vw] sm:w-[900px] pt-20 mb-44"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <h1 className="text-3xl font-semibold flex flex-col gap-2 items-center">
        <h1>Contact Me</h1>{" "}
        <span className="text-xs font-light">Get in Touch</span>{" "}
      </h1>
      <div className="flex flex-col sm:flex-row mt-6 gap-16">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg mb-3">Talk To Me</h1>

          <div className="flex flex-col mt-3 items-center border border-black w-[250px] rounded-lg p-4 bg-white">
            <MdOutlineEmail className="font-bold text-xl" />
            <span className="font-bold text-xl">Email</span>
            <span className="my-2">rahulkardile321@gmail.com</span>
            <Link
              to={`mailto:rahulkardile321@gmail.com?subject=Regarding ${"Project"}`}
              target="_blank"
              className="mt-3"
            >
              Connect me
            </Link>
          </div>
          <div className="flex flex-col mt-3 items-center border border-black rounded-lg p-4 w-[250px] bg-white">
            <FaLinkedin className="duration-300 ease-in-out hover:text-purple-600" />
            <span className="font-bold text-xl">LinkedIn</span>
            <span className="my-2">Rahul Kardile</span>
            <Link
              to={`https://www.linkedin.com/in/rahull-kardile/`}
              target="_blank"
              className="mt-3"
            >
              Connect me
            </Link>
          </div>
          <div className="flex flex-col mt-3 items-center border w-[250px] border-black rounded-lg p-4 bg-white">
            <FaInstagram className="duration-300 ease-in-out hover:text-purple-600" />
            <span className="font-bold text-xl">Instagram</span>
            <span className="my-2">rahull_kardile</span>
            <Link
              to={`https://www.instagram.com/rahull_kardile/`}
              target="_blank"
              className="mt-3"
            >
              Connect me
            </Link>
          </div>
        </div>

        <form className="flex flex-col portrait:w-[60vw] items-center gap-3">
          <h1 className="font-semibold text-lg mb-3">Write me your project</h1>
          <input
            type="text"
            onClick={(e) => setname(e.target.value)}
            id="name"
            className="p-4 border border-slate-600  rounded-md w-[80vw] sm:w-[400px]"
            placeholder="Name"
          />
          <textarea
            placeholder="Write About Your project"
            onClick={(e) => setmessage(e.target.value)}
            id="content"
            className="p-4 border border-slate-600  rounded-md h-36 w-[80vw] sm:w-[400px]"
          ></textarea>

          <Link
            className="p-4 bg-slate-600 mb-20 text-white rounded-md"
            to={`mailto:rahulkardile321@gmail.com?subject=Regarding ${name}&body=${message}`}
          >
            {" "}
            Send Message
          </Link>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
