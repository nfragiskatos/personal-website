import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 8rem;
  @media ${({ theme }) => theme.device.md} {
    flex-direction: column;
    margin-bottom: 8rem;
  }

  @media ${({ theme }) => theme.device.sm} {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.div`
    font-size: 2.25rem;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media ${({ theme }) => theme.device.sm} {
      flex-direction: column;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.div`
    font-size: 2.2rem;
    padding: 2.5rem;
    text-align: start;
    line-height: 1.6;
    max-width: 60rem;
    border-radius: 50px 15px;
    color: ${({ theme }) => theme.colors.onSurface};

    @media ${({ theme }) => theme.device.sm} {
      font-size: 2rem;
      padding: 1rem;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ProjectImageProps {
    width?: string,
    height?: string,
    altHeight?: string,
    altWidth?: string,
    margin?: boolean
}

export const ProjectImage = styled('img').withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'margin', 'altWidth', 'altHeight'].includes(prop),
}) <ProjectImageProps>`
  width: ${({ width }) => width ? width : "15%"};
  height: ${({ height }) => height ? height : "15%"};
  margin-right: ${({ margin }) => margin ? "1rem" : "0"};

  @media ${({ theme }) => theme.device.md} {
    width: ${({ altWidth }) => altWidth ? altWidth : "25%"};
    height: ${({ altHeight }) => altHeight ? altHeight : "25%"};
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.device.sm} {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-right: 0;
  }
  
`;

// export const ProjectImage = styled.img<ProjectImageProps>`
//   width: ${({ width }) => width ? width : "15%"};
//   height: ${({ height }) => height ? height : "15%"};
//   margin-right: ${({ margin }) => margin ? "1rem" : "0"};

//   @media ${({ theme }) => theme.device.md} {
//     width: ${({ altWidth }) => altWidth ? altWidth : "25%"};
//     height: ${({ altHeight }) => altHeight ? altHeight : "25%"};
//     margin-bottom: 1rem;
//   }

//   @media ${({ theme }) => theme.device.sm} {
//     margin-bottom: 1rem;
//     margin-top: 1rem;
//     margin-right: 0;
//   }
  
// `;

export const GithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  height: 48px;
  width: 48px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
