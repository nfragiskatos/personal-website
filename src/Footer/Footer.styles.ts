import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const GithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  height: 72px;
  width: 72px;
  cursor: pointer;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  height: 72px;
  width: 72px;
  cursor: pointer;
`;
