import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10rem;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.onSurface};
    padding: 2rem;

    @media ${({ theme }) => theme.device.lg} {
        flex-direction: column;
      }
`;

export const BlogDetails = styled.div`
  font-size: 2.2rem;
  padding: 2.5rem;
  text-align: start;
  width: 100%;
  line-height: 1.6;
  max-width: 60rem;
  border-radius: 15px 50px;
  align-self: start;
  background: ${({ theme }) => theme.colors.surfaceVariant};

  @media ${({ theme }) => theme.device.lg} {
        align-self: center;
      }
`;

export const BlogPageLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.colors.tertiary};
`;