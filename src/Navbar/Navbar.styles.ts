import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 0 0 1rem;
`;

export const PagesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

interface PageProps {
  isActive?: boolean;
}

export const Page = styled.li<PageProps>`
  padding: 1rem;
  ${({ isActive, theme }) =>
    isActive &&
    `
        background-color: ${theme.colors.tertiary};
        color: ${theme.colors.onTertiary};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.onTertiary};
  }
`;

export const NavLink = styled.div`
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  text-decoration: none;
  cursor: pointer;
`;
