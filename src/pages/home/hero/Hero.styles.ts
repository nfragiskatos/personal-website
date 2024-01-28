import { FaBlog, FaGithub, FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  margin-bottom: 2em;
  clear: both;
  animation: intro 0.3s both;
  animation-delay: 0.25s;
  height: 100vh;
  min-height: 80rem;
  max-height: 120rem;
  background: ${({ theme }) => `
  linear-gradient(to right, ${theme.colors.inversePrimary}CC, ${theme.colors.tertiaryContainer}CC), url(hero-background.svg);
  `}
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SocialLinks = styled.aside`
  position: absolute;
  display: flex;
  left: 1rem;
  top: 50%;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.inverseSurface};
  box-shadow: ${({ theme }) => theme.colors.shadow} 4px 8px 16px 0px;
  transition: none;
  transform: translate(0, -50%);

  @media (max-width: 1700px) {
    flex-direction: row;
    bottom: 1rem;
    left: 50%;
    top: auto;
    transform: translate(-50%, 100%);
  }
`;

export const GithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.inverseOnSurface};
  height: 3rem;
  width: 3rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.inverseOnSurface};
  height: 3rem;
  width: 3rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const BlogIcon = styled(FaBlog)`
  color: ${({ theme }) => theme.colors.inverseOnSurface};
  height: 3rem;
  width: 3rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 0 2rem;

  @media ${({ theme }) => theme.device.lg} {
    flex-direction: column;
  }
`;

export const HeroProfilePictureWrapper = styled.div`
  max-width: 30rem;
  height: 100%;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${({ theme }) => theme.colors.shadow} 4px 8px 16px 4px;

  @media ${({ theme }) => theme.device.lg} {
    max-width: 20rem;
  }
`;

export const HeroProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const HeroTitle = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin: 0;
  @media ${({ theme }) => theme.device.md} {
    font-size: 5rem;
  }

  // @media ${({ theme }) => theme.device.sm} {
  //   font-size: 4rem;
  // }
`;

export const HeroDetails = styled.p`
  margin: 2.5rem auto 0px;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  line-height: 1.6;

  @media ${({ theme }) => theme.device.md} {
    font-size: 2rem;
  }

  // @media ${({ theme }) => theme.device.sm} {
  //   font-size: 1.5rem;
  // }
`;

export const HeroInfo = styled.div`
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.onSurface};
`;
