import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
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
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100vw;
  transition: top 0.3s;
  z-index: 1;

  ${({ isSticky, navHeight }) =>
    isSticky &&
    `
        top: -${navHeight}px;
    `}
`;

interface PageListProps {
  isHidden: boolean;
}

export const PagesList = styled.ul<PageListProps>`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    position: fixed;
    inset: 0 0 0 50%;
    padding: min(20vh, 5rem) 2rem;
    background: ${({ theme }) => theme.colors.primary}B5;
    color: ${({ theme }) => theme.colors.onPrimary};
    z-index: 999;
    ${({ isHidden }) =>
      isHidden &&
      `
      transform: translateX(100%);
    
    `}
  }

  @supports (backdrop-filter: blur(2rem)) {
    backdrop-filter: blur(1rem);
  }
`;

interface PageProps {
  isActive?: boolean;
}

export const Page = styled.li<PageProps>`
  padding: 1rem;
  width: max-content;
`;

export const NavTitle = styled(Link)`
  transition: font-size 0.3s;
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

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
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
  font-weight: 600;

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

export const HamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  height: 4rem;
  width: 4rem;
  z-index: 9999;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  align-self: center;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const CloseMenu = styled(IoClose)`
  display: none;
  height: 4rem;
  width: 4rem;
  z-index: 9999;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  align-self: center;

  @media (max-width: 1100px) {
    display: block;
  }
`;
