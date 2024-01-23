import styled from "styled-components";

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Publisher = styled.div`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 300;
  font-style: italic;
`;
