import { Main } from "./Blog.styles";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <Main>
      <h1>I'm on the blog page</h1>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </Main>
  );
};

export default Blog;
