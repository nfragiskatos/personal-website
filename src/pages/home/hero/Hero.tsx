import {
  BlogIcon,
  GithubIcon,
  HeroContent,
  HeroDetails,
  HeroInfo,
  HeroProfilePicture,
  HeroProfilePictureWrapper,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  LinkedInIcon,
  SocialLinks,
  TempBackgroundImg,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroSection>
      <SocialLinks>
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
      </SocialLinks>
      <HeroContent>
        <HeroProfilePictureWrapper>
          <HeroProfilePicture src="profile-picture.jpg" />
        </HeroProfilePictureWrapper>
        <HeroInfo>
          <HeroTitle>Hi, I'm Nicholas Fragiskatos</HeroTitle>
          <HeroSubtitle>Software Engineer | Learner | Tinkerer</HeroSubtitle>
          <HeroDetails>
            I'm a software engineer who mainly focuses on full stack and Android
            development. However, I can help build software products with
            whatever language, framework, library, design pattern, methodology,
            etc. is necessary for the best project outcome.
          </HeroDetails>
        </HeroInfo>
      </HeroContent>
      <TempBackgroundImg />
    </HeroSection>
  );
};

export default Hero;
