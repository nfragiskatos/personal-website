import { Fragment } from "react";
import Blog from "./blog/Blog";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Blog />
      <Experience />
      <Projects />
    </Fragment>
  );
};

export default Home;
