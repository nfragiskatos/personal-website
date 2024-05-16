import {
  BlogIcon,
  FooterWrapper,
  GithubIcon,
  LinkedInIcon,
  SocialMediaWrapper,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialMediaWrapper>
        <a
          href="https://www.github.com/nfragiskatos"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nicholasfragiskatos/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://blog.nicholasfragiskatos.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <BlogIcon />
        </a>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
