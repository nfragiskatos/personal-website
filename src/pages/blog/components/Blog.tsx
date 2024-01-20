import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <main className="background">
      <button
        onClick={() => {
          document.documentElement.setAttribute("data-theme", "dark");
        }}
      >
        TOGGLE
      </button>
      <h1>I'm on the blog page</h1>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </main>
  );
};

export default Blog;
