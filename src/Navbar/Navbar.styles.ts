import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  isSticky?: boolean;
  navHeight: number;
}

export const Nav = styled.nav<NavProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 1rem 5rem;
  position: sticky;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 1;

  ${({ isSticky, navHeight }) =>
    isSticky &&
    `
        top: -${navHeight}px;
    `}
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
`;

export const NavTitle = styled(Link)`
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1.8rem;
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
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
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

export const ProfilePictureWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 1.5rem;
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const TitleProfilePictureWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
