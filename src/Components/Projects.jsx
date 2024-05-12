import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="project"
      className="flex items-center w-[95vw] m-auto justify-center flex-col gap-14 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: "10vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-semibold font-poppins flex flex-col items-center gap-2"
      >
        <h1>Portfolio</h1>{" "}
        <span className="text-xs font-light">Browse My Recent Projects</span>
      </motion.h1>

      <div className=" sm:w-[780px] flex flex-col w-[100vw] items-center m-auto gap-10">
     
      <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:w-full"
          initial={{ opacity: 0, y: "10vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5, bounce: 0.7 }}
        >
          <div className="w-[75%] px-3 bg-slate-500 rounded-lg h-auto">
            <img
              className="w-[100%] rounded mt-5"
              src={pro2}
              alt="project 1 img"
            />
          </div>
          <div className="sm:w-[450px] text-center max-w-xs flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">StoryIn</h1>
            <p className="text-sm">
            StoryIn is an audiobook streaming platform, similar to Kuku FM, where users can listen to audiobooks. This platform also supports the Razorpay payment gateway, allowing users to subscribe for monthly or yearly access.
            </p>
            <div className="flex flex-row gap-3 justify-center mt-2">
              <Link
                to={"https://github.com/rahulkardile/StoryIn"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://storyin-client.onrender.com/"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <LuArrowUpRightSquare />
              </Link>
            </div>
          </div>
        </motion.div>
     
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:w-full"
          initial={{ opacity: 0, y: "10vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5, bounce: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.5, bounce: 0.7 }}
            className="w-[75%] px-3 bg-slate-500 rounded-lg h-auto"
          >
            <img
              className="w-[100%] rounded mt-5"
              src={pro1}
              alt="project 1 img"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.5, bounce: 0.7 }}
            className="sm:w-[450px] text-center max-w-xs flex flex-col gap-2"
          >
            <h1 className="text-2xl font-semibold">Wix Booking Service</h1>
            <p className="text-sm">
            Wix Estate is a full-stack website built with Node.js on the backend and React.js on the frontend. It offers full CRUD functionality, file handling, and advanced authentication.
            </p>
            <div className="flex flex-row gap-3 justify-center mt-2">
              <Link
                to={"https://github.com/rahulkardile/Estate01"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://estaste-mern.onrender.com/"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <LuArrowUpRightSquare />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:w-full"
          initial={{ opacity: 0, y: "10vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5, bounce: 0.7 }}
        >
          <div className="w-[75%] px-3 bg-slate-500 rounded-lg h-auto">
            <img
              className="w-[100%] rounded mt-5"
              src={pro3}
              alt="project 1 img"
            />
          </div>
          <div className="sm:w-[450px] text-center max-w-xs flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Keeper Clone</h1>
            <p className="text-sm">
            Keeper Clone: A responsive note-taking app built with React, Tailwind CSS for styling, Redux for state management, and React Router for navigation. Explore the code to see this tech stack in action!
            </p>
            <div className="flex flex-row gap-3 justify-center mt-2">
              <Link
                to={"https://github.com/rahulkardile/QuadB-Assignment"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://quad-seven.vercel.app/"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <LuArrowUpRightSquare />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:w-full"
          initial={{ opacity: 0, y: "10vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5, bounce: 0.7 }}
        >
          <div className="w-[75%] px-3 bg-slate-500 rounded-lg h-auto">
            <img
              className="w-[100%] rounded mt-5"
              src={pro3}
              alt="project 1 img"
            />
          </div>
          <div className="sm:w-[450px] text-center max-w-xs flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Nike Clone</h1>
            <p className="text-sm">
            Nike Clone is a full-stack website built with Node.js on the backend and React.js on the frontend. It provides full CRUD functionality, file handling, and advanced authentication.
            </p>
            <div className="flex flex-row gap-3 justify-center mt-2">
              <Link
                to={"https://github.com/rahulkardile/StoryIn"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://estaste-mern.onrender.com/"}
                className="duration-300 ease-in-out text-xl hover:text-purple-600"
                target="_blank"
              >
                <LuArrowUpRightSquare />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
