import {
  BlogIcon,
  GithubIcon,
  HeroContent,
  HeroDetails,
  HeroInfo,
  HeroProfilePicture,
  HeroProfilePictureWrapper,
  HeroSection,
  HeroTitle,
  LinkedInIcon,
  SocialLinks,
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
          <HeroTitle>This is Nicholas Fragiskatos</HeroTitle>
          <HeroDetails>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eveniet error quod quidem necessitatibus quo temporibus molestiae
            velit. Minima eum quam sit? Voluptate illo, voluptatibus ad eligendi
            animi illum fugiat!
          </HeroDetails>
        </HeroInfo>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
