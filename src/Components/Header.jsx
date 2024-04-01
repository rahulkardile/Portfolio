import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      style={{
        backgroundColor: "rgb(237, 237, 237)",
      }}
      className="sm:p-4 p-7 flex flex-row w-screen sm:w-full justify-between fixed top-0"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >
      <h1
        id="dancing-script"
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="sm:ml-4 ml-3 w-fit flex gap-3 text-xl sm:text-2xl cursor-pointer duration-500 ease-in-out hover:text-purple-600"
      >
        Rahul <span className=""> Kardile</span>
      </h1>

      <div className="lg:text-sm portrait:hidden sm:hidden lg:block  mr-5">
        <section className="flex gap-3">
          <Link
            className="duration-200 ease-in-out hover:text-purple-600"
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </Link>
          <Link
            className="duration-200 ease-in-out hover:text-purple-600"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </Link>
          <Link
            className="duration-200 ease-in-out hover:text-purple-600"
            onClick={() => {
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </Link>
          <Link id=" "
            className="duration-200 ease-in-out hover:text-purple-600"
            onClick={() => {
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Portfolio
          </Link>
          <Link
            className="duration-200 ease-in-out hover:text-purple-600"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Link>
        </section>
      </div>

      <div className="lg:hidden ml-4 cursor-pointer sm:mr-5">
        <IoMenu className="sm:text-3xl text-lg" />
      </div>
    </motion.header>
  );
};

export default Header;
