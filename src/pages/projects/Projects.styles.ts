import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.onSurface};

  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-bottom: 2rem;
`;

export const HeroDetails = styled.div`
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  line-height: 1.6;
  max-width: 90rem;

  @media ${({ theme }) => theme.device.sm} {
    font-size: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  text-transform: uppercase;
  margin: 2rem;

  @media ${({ theme }) => theme.device.sm} {
    font-size: 3.5rem;
  }
`;

export const GitHubLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Content = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  @media ${({ theme }) => theme.device.md} {
    display: flex;
    flex-direction: column;
  }
`;