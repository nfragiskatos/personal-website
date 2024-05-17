import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  flex-direction: column;
`;

export const Content = styled.article`
  width: fit-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
  justify-items: center;
  align-items: start;


  @media ${({ theme }) => theme.device.lg} {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
  @media ${({ theme }) => theme.device.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
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

  @media ${({ theme }) => theme.device.md} {
    margin-bottom: 3rem;
    padding-bottom: 0;
  }
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

export const HashnodeLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8rem;
`;

export const LoadingMessage = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-right: 1rem;
`;
