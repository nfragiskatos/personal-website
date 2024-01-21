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
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;
