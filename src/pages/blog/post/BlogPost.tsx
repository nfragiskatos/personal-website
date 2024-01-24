import { PostNode } from "../../../hashnode/interfaces";
import {
  Brief,
  ButtonLine,
  DetailsWrapper,
  Image,
  ImageAttribution,
  ImageAttributionLink,
  ImageLinkWrapper,
  ImageWrapper,
  ReadButton,
  Title,
  Wrapper,
} from "./BlogPost.styles";

interface BlogPostProps {
  post: PostNode;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageLinkWrapper href={post.url} target="_blank" rel="noreferrer">
          <Image src={post.coverImage.url} decoding="async" />
        </ImageLinkWrapper>
        <ImageAttribution>
          Photo by{" "}
          <ImageAttributionLink
            href={post.coverImage.attribution}
            target="_blank"
            rel="noreferrer"
          >
            {post.coverImage.photographer}
          </ImageAttributionLink>
        </ImageAttribution>
      </ImageWrapper>
      <DetailsWrapper>
        <Title href={post.url} target="_blank" rel="noreferrer">
          {post.title}
        </Title>
        <Brief>{post.brief}</Brief>
      </DetailsWrapper>
      <ButtonLine>
        <ReadButton>
          {/* <ReadIcon /> */}
          read
        </ReadButton>
      </ButtonLine>

      {/* <div
        className="primary"
        style={{
          height: "200px",
          width: "200px",
          margin: "16px",
        }}
      >
        {`${post.id}, ${post.title}, ${post.brief}, ${post.url},`}
      </div> */}
    </Wrapper>
  );
};

export default BlogPost;
