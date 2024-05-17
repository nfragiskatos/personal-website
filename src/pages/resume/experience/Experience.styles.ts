import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 100rem;
`;

export const JobDetails = styled.ul`
  font-size: 1.5rem;
  
  @media ${({ theme }) => theme.device.sm} {
    padding-left: 1rem;
  }
`;
