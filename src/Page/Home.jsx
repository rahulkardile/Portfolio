import HomeC from "../Components/Home";
import Header from "../Components/Header";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Animate from "../Components/Animate";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-screen h-screen">
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
