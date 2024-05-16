import { Fragment } from "react";
import Blog from "./blog/Blog";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Blog />
    </Fragment>
  );
};

export default Home;
