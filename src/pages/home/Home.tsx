import { Fragment } from "react";
import Blog from "./blog/Blog";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Blog />
      <Experience />
    </Fragment>
  );
};

export default Home;
