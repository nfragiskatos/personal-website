import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";

export const GitHubIcon = styled(FaGithub)`
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;
