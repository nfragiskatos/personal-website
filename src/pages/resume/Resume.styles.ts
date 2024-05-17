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

export const Title = styled.h1`
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
