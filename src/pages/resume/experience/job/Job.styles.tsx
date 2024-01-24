import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Title = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Date = styled.div`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 300;
  font-style: italic;
`;

export const Company = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bolder;
`;

export const Location = styled.div`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 300;
  font-style: italic;
`;
