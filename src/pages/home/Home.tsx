import { useEffect } from "react";
import Blog from "./blog/Blog";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import { Main } from "./Home.styles";
import Projects from "./projects/Projects";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <Hero />
      <Blog />
      <Experience />
      <Projects />
    </Main>
  );
};

export default Home;
