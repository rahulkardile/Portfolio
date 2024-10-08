import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import hand from "../assets/Emojis.png";
import mainIng from "../assets/Main.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../utils/SkillImages";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="flex flex-col py-16 px-4 portrait:py-36 gap-14 sm:gap-24 xl:mb-28 z-10 w-screen items-center sm:max-w-[950px] m-auto pt-36"
    >
      <motion.section className="flex items-center m-auto flex-row sm:w-[80vw] portrait:flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, x: "-7vh" }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ type: "spring", duration: 2.5, delay: 1 }}
          className="portrait:hidden lg:block "
        >
          <section className="flex flex-col gap-3">
            <Link
              to={"https://www.linkedin.com/in/rahull-kardile/"}
              target="_blank"
            >
              <FaLinkedin className="duration-300 ease-in-out hover:text-purple-600" />
            </Link>
            <Link to={"https://github.com/rahulkardile"} target="_blank">
              <FaGithub className="duration-300 ease-in-out hover:text-purple-600" />
            </Link>
            <Link to={"https://x.com/rahul_kardile77"} target="_blank">
              <FaTwitter className="duration-300 ease-in-out hover:text-purple-600" />
            </Link>
            <Link
              to={"https://www.instagram.com/rahull_kardile/"}
              target="_blank"
            >
              {" "}
              <FaInstagram className="duration-300 ease-in-out hover:text-purple-600" />
            </Link>
          </section>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: "10vh" }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ type: "spring", duration: 2.5, delay: 1 }}
          src={mainIng}
          className="lg:w-[250px] sm:w-[220px] w-[150px] md:hidden object-contain bg-red-200 rounded-lg"
          alt="img"
        />

        <motion.div
          initial={{ opacity: 0, x: "-10vh" }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ type: "spring", duration: 2.5, delay: 1 }}
          className="sm:ml-10 portrait:m-auto self-center"
        >
          <div className="flex flex-col portrait:items-center items-start">
            <h1 className="flex gap-2 items-center font-bold text-black text-base sm:text-2xl bg-gradient-to-l select-none">
              Rahul Kardile{" "}
              <img
                className="object-contain w-4 h-4 md:w-6 md:h-6"
                draggable={false}
                src={hand}
                alt="hand"
              />
            </h1>
            <span className="flex gap-2 items-center portrait:text-xs ml-2 duration-500 ease-in-out hover:text-purple-600 ">
              {" "}
              <p className="border border-black h-[1px] w-10 sm:w-20 " /> Web
              Developer
            </span>
          </div>

          <p className="mt-5 text-sm w-[80vw] sm:w-[550px]">
            {
              "Hi, I'm Rahul Kardile. A passionate Full Stack Web Developer based in Pune, Maharashtra, India📌"
            }
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: "-10vh" }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ type: "spring", duration: 2.5, delay: 1 }}
          src={mainIng}
          className="lg:w-[250px] sm:w-[220px] portrait:hidden sm:block w-[120px] object-contain bg-red-200 rounded-lg"
          alt="img"
        />
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: "7vh" }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ type: "spring", duration: 2.5, delay: 1, bounce: 0.2 }}
        className="flex flex-row sm:self-start items-center gap-2 sm:gap-3 select-none"
      >
        <h3 className="text-black font-semibold portrait:text-xs duration-500 ease-in-out hover:text-purple-600">
          Tech Stack
        </h3>
        <p className="h-4 w-[1px] border border-black" />

        <div className="flex flex-row flex-wrap items-center gap-3">
          {images.map((item, index) => (
            <img
              key={index}
              draggable={false}
              className="w-[10px] h-auto sm:w-[30px] sm:h-auto"
              src={item.src}
              alt={item.name}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
