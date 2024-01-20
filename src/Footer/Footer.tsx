import {
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
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
