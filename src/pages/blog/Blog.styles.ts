import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  padding: 4rem;
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
