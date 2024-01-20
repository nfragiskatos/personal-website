import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  isSticky?: boolean;
}

export const Nav = styled.nav<NavProps>`
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 0 0 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  transition: top 0.3s;

  ${({ isSticky }) =>
    isSticky &&
    `
        top: -107px;
    `}
`;

// position: sticky;
// top: 0;

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
`;

export const NavTitle = styled(Link)`
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  text-decoration: none;
  cursor: pointer;
`;

interface NavLinkProps {
  isActive?: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.tertiary};
    width: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);

    ${({ isActive }) =>
      isActive &&
      `
    transform: scaleX(1);
    `}
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;
