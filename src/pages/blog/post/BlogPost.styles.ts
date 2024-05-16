import { FaReadme } from "react-icons/fa6";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  //   background: ${({ theme }) => theme.colors.primaryContainer};
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageLinkWrapper = styled.a`
  max-width: 40rem;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;

  @media ${({ theme }) => theme.device.lg} {
    max-width: 20rem;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const ImageAttribution = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  padding: 0.5rem;
`;

export const ImageAttributionLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const DetailsWrapper = styled.article`
  max-width: 40rem;
  width: 100%;
`;

export const Title = styled.a`
  font-size: 2.25rem;
  font-weight: bold;
  text-decoration: none;
  //   text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  margin: 0;
`;

export const Brief = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const ButtonLine = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: end;
`;

export const ReadButton = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  width: max-content;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  //   background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.onTertiary};
  }
`;

export const ReadIcon = styled(FaReadme)`
  width: 3rem;
  height: 3rem;
  //   color: ${({ theme }) => theme.colors.onTertiary};
`;
