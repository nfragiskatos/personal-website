import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.surfaceVariant};
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 100rem;
  //   margin: 1rem;
  //   display: grid;
  //   grid-template-columns: 1fr 2fr;
  //   gap: 1rem 5rem;
`;

export const JobDetails = styled.ul`
  font-size: 1.5rem;
`;

export const Details = styled.div`
  font-size: 1.5rem;
`;
