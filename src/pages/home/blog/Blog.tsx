import { gql, useQuery } from "@apollo/client";
import { FetchPublicationData } from "../../../hashnode/interfaces";
import { routes } from "../../../utils/routes";
import BlogPost from "../../blog/post/BlogPost";
import { BlogDetails, BlogPageLink, BlogSection } from "./Blog.styles";

const BLOG_QUERY = gql`
  {
    publication(host: "blog.nicholasfragiskatos.dev") {
      isTeam
      title
      posts(first: 1) {
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

    return (
        <BlogSection>
            <BlogDetails>
                I enjoy learning through teaching and mentoring, something I discovered
                about myself during my time getting my bachelor’s degree, and then later my
                master’s degree, when I worked as a teaching assistant.
                <br />
                <br />
                In hopes of teaching
                others and giving back to the online learning community, I also spend time writing
                educational articles about various software engineering topics for my blog.
                <br />
                <br />
                Checkout more articles <BlogPageLink
                    to={routes.blog.path}


                >
                    here
                </BlogPageLink>.
            </BlogDetails>
            {data?.publication?.posts?.edges.map((e) => {
                return <BlogPost key={e.node.id} post={e.node} />;
            })}
        </BlogSection>
    )
}

export default Blog