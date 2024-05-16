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
  width: max-content;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
  //   grid-auto-rows: 1fr;
  justify-items: center;
  align-items: start;

  //   max-width: 100rem;

  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;

  @media ${({ theme }) => theme.device.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  // margin-bottom: 2em;
  // clear: both;
  // animation: intro 0.3s both;
  // animation-delay: 0.25s;
  // height: 100vh;
  // min-height: 80rem;
  // max-height: 120rem;
  // background: ${({ theme }) => `
  linear-gradient(to right, ${theme.colors.primary}CC, ${theme.colors.tertiary}CC);
  `}
  // background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background: ${({ theme }) => theme.colors.surfaceTint};
  color: ${({ theme }) => theme.colors.onSurface};

  display: flex;
  flex-direction: column;
  // padding: 0 12rem 5rem 12rem;
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
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  text-transform: uppercase;
  margin: 2rem;
`;

export const HashnodeLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
`;
