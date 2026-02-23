import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Proyects from "../components/Proyects";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <>
      <Hero/>
      <Technologies />
      <Proyects />
      <Contact />
    </>
  )
};

export default Home;