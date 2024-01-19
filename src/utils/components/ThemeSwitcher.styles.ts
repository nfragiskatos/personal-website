import styled from "styled-components";

export const StyledThemeSwitcher = styled.div`
  background: ${({ theme }) => theme.colors.inversePrimary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 1.33rem;
  cursor: pointer;
  padding: 0.66rem;
  position: relative;
  height: 2.7rem;

  &:before {
    content: "";
    position: absolute;
    width: 2.22rem;
    height: 2.22rem;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.onTertiary};
    z-index: 0;
    left: 0;
    transform: translateX(0.35rem);
    transition: var(--default-transition);

    ${({ theme }) =>
      theme.colors.theme === "dark" &&
      `
        transform: translateX(3rem);
    `}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SunIcon = styled.svg`
  z-index: 1;
  fill: ${({ theme }) =>
    theme.colors.theme === "dark"
      ? theme.colors.outline
      : theme.colors.tertiary};
`;

export const MoonIcon = styled.svg`
  z-index: 1;
  fill: ${({ theme }) =>
    theme.colors.theme === "dark" ? "white" : theme.colors.outline};
`;
