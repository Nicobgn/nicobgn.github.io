import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <Hero/>
      <Technologies />
      <Projects />
      <Contact />
    </>
  )
};

export default Home;