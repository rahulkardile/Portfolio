import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      style={{
        backgroundColor: "rgb(237, 237, 237)",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
      }}
      className="sm:p-4 p-3 pt-5 portrait:pt-7 flex flex-row z-50 w-screen sm:w-full justify-between fixed top-0"
    >
      <h1
        id="dancing-script"
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="sm:ml-4 ml-3 w-fit flex gap-3 text-xl sm:text-2xl 2xl:ml-[4%] cursor-pointer xl:text-3xl duration-500 ease-in-out hover:text-purple-600"
      >
        Rahul <span className=""> Kardile</span>
      </h1>

      <div className="lg:text-sm portrait:hidden sm:hidden lg:block xl:mr-14 2xl:mr-[5%]  mr-5">
        <section className="flex xl:gap-6 xl:text-base gap-3">
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
          <Link
            id=" "
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
        {isOpen ? (
          <RiCloseCircleFill
            className="text-2xl sm:text3 text-gray-700"
            onClick={() => setOpen(!isOpen)}
          />
        ) : (
          <IoMenu
            className="sm:text-3xl text-2xl"
            onClick={() => setOpen(!isOpen)}
          />
        )}

        <nav
          className={`bg-white p-4 mr-5 absolute left-0 pt-4 top-0 w-[100%] h-[110vh] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-500`}
        >
          <ul className="flex pt-8 flex-col gap-8 mt-4 ml-5">
            <RiCloseCircleFill
              className="text-2xl sm:text3 fixed top-7 right-3 text-gray-700"
              onClick={() => setOpen(!isOpen)}
            />

            <Link
              className="duration-200 ease-in-out hover:text-purple-600"
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
                setOpen(false);
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
                setOpen(false);
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
                setOpen(false);
              }}
            >
              Skills
            </Link>
            <Link
              id=" "
              className="duration-200 ease-in-out hover:text-purple-600"
              onClick={() => {
                document
                  .getElementById("project")
                  .scrollIntoView({ behavior: "smooth" });
                setOpen(false);
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
                setOpen(false);
              }}
            >
              Contact
            </Link>
            <Link
              className="duration-200 ease-in-out hover:text-purple-600"
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Link>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
