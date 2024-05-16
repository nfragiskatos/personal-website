import { gql, useQuery } from "@apollo/client";
import { FetchPublicationData } from "../../hashnode/interfaces";
import {
  Content,
  HashnodeLink,
  HeroDetails,
  HeroSection,
  HeroTitle,
  Main,
} from "./Blog.styles";
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
      <HeroSection>
        <HeroTitle>Just keep learning</HeroTitle>
        <HeroDetails>
          As someone who is a big believer in continuous learning, I take
          advantage of many free online learning resources. In hopes of teaching
          others and giving back to the online learning community, I also spend
          time writing educational articles about various software engineering
          topics on my blog.
          <br />
          The full blog is hosted{" "}
          <HashnodeLink
            href="https://blog.nicholasfragiskatos.dev/"
            target="_blank"
          >
            here on Hashnode.
          </HashnodeLink>
        </HeroDetails>
      </HeroSection>
      <Content>
        {data?.publication?.posts?.edges.map((e) => {
          return <BlogPost key={e.node.id} post={e.node} />;
        })}
      </Content>
    </Main>
  );
};

export default Blog;
