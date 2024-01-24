import { gql, useQuery } from "@apollo/client";
import { FetchPublicationData } from "../../hashnode/interfaces";
import { Content, Main } from "./Blog.styles";
import BlogPost from "./post/BlogPost";

const BLOG_QUERY = gql`
  {
    publication(host: "blog.nicholasfragiskatos.dev") {
      isTeam
      title
      posts(first: 0) {
        edges {
          node {
            id
            title
            subtitle
            brief
            url
            coverImage {
              url
              isPortrait
              attribution
              photographer
              isAttributionHidden
            }
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const { data, loading, error } = useQuery<FetchPublicationData>(BLOG_QUERY);

  if (loading) return <p>"Loading..."</p>;
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <Main>
      <Content>
        {/* <p>{JSON.stringify(data)}</p>
      <h1>I'm on the blog page</h1> */}
        {data?.publication?.posts?.edges.map((e) => {
          return <BlogPost key={e.node.id} post={e.node} />;
        })}
      </Content>
    </Main>
  );
};

export default Blog;
