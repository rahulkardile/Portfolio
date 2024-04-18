import { FaMedal } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import img from "../assets/about.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col portrait:items-center gap-3 m-auto w-screen sm:w-[900px] pt-24"
    >
      <motion.h1 
      initial={{ opacity: 0, y: "-20vh"  }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.5, type: "spring", delay: 1, bounce: 0.4 }}
      className="text-3xl font-semibold flex flex-col gap-2 items-center">
        <h1 className="portrait:text-xl">About Me</h1>{" "}
        <span className="text-xs font-normal">Get To Know More</span>{" "}
      </motion.h1>

      <div className="mt-7 flex sm:flex-row flex-col items-center gap-16">
        <img
          className="w-[250px] h-[250px] portrait:w-[190px] portrait:h-[190px] rounded-lg"
          src={img}
          alt="logo"
        />
        <div className="sm:w-[50%] portrait:w-[80vw] flex flex-col gap-4 portrait:m-auto justify-center items-start">
          <div className="w-[450px]  portrait:w-[78vw] mx-4">
            <div className="flex flex-row justify-between items-center mb-2 text-xl">

              <h1 className="sm:w-[200px] portrait:w-[180px] flex flex-col justify-center h-28 items-center gap-1 border-[1px] border-slate-400 rounded-2xl bg-white">
                <PiGraduationCapFill className="font-extrabold duration-200 ease-in-out hover:text-purple-600" />
                <span className="font-semibold portrait:text-sm duration-200 ease-in-out hover:text-purple-600">
                  Education
                </span>
                <span className="text-xs text-center capitalize portrait:text-xs font mx-8">
                  bachelor of computer application
                </span>
              </h1>
              
              <h1 className="w-[200px] portrait:w-[180px] flex flex-col justify-center h-28 items-center gap-1 mx-2 border-[1px] border-slate-400 rounded-2xl bg-white">
                <FaMedal className="font-extrabold  duration-200 ease-in-out hover:text-purple-600" />
                <span className="font-semibold  duration-200 ease-in-out portrait:text-sm hover:text-purple-600">
                  Completed
                </span>
                <span className="text-xs">10+ Projects</span>
              </h1>
            </div>

            <p className="text-sm text-center">
              {
                " I'm a full-stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my "
              }{" "}
              <Link
                className="font-semibold duration-200 ease-in-out hover:text-purple-600"
                target="_blank"
                to={"https://github.com/rahulkardile"}
              >
                GitHub Profile.
              </Link>{" "}
            </p>
          </div>

          <Link
            download={true}
            to={"/Resume.pdf"}
            target="_blank"
            className="p-4 bg-gray-900 text-white rounded-md font-bold self-center duration-300 ease-in-out hover:bg-slate-600"
          >
            Download CV
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
