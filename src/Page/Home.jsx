import HomeC from "../Components/Home";
import Header from "../Components/Header";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { useScroll, motion } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header />
      <section className="w-screen h-screen mb-8">
        <HomeC />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </section>
    </>
  );
};

export default Home;
