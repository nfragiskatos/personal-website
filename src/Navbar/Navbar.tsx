import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "../utils/components/ThemeSwitcher";
import { routes } from "../utils/routes";
import {
  CloseMenu,
  HamburgerMenu,
  Nav,
  NavLink,
  NavTitle,
  Page,
  PagesList,
  ProfilePicture,
  ProfilePictureWrapper,
  TitleProfilePictureWrapper,
} from "./Navbar.styles";

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const prevScrollPosition = useRef(window.scrollY);
  const [height, setHeight] = useState(0.0);
  const [isHidden, setIsHidden] = useState(true);
  const ref = useRef<HTMLElement>(null);

  const stickNavbar = () => {
    if (window !== undefined) {
      const currentScrollPosition = window.scrollY;

      setIsSticky(prevScrollPosition.current < currentScrollPosition);
      prevScrollPosition.current = currentScrollPosition;
    }
  };

  const toggleMenuVisibility = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    setHeight(ref.current?.clientHeight ?? 0);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <Nav isSticky={isSticky} navHeight={height} ref={ref}>


      <TitleProfilePictureWrapper>
        <ProfilePictureWrapper>
          <ProfilePicture src="profile-picture.jpg" />
        </ProfilePictureWrapper>
        <NavTitle
          to={routes.home.path}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Nicholas Fragiskatos
        </NavTitle>
      </TitleProfilePictureWrapper>
      <PagesList isHidden={isHidden}>
        <Page>
          <NavLink
            to={routes.home.path}
            onClick={toggleMenuVisibility}
            className="title-large"
            isActive={location.pathname === routes.home.path}
          >
            {routes.home.title}
          </NavLink>
        </Page>
        <Page>
          <NavLink
            to={routes.blog.path}
            onClick={toggleMenuVisibility}
            className="title-large"
            isActive={location.pathname === routes.blog.path}
          >
            {routes.blog.title}
          </NavLink>
        </Page>
        <Page>
          <NavLink
            onClick={toggleMenuVisibility}
            to={routes.projects.path}
            className="title-large"
            isActive={location.pathname === routes.projects.path}
          >
            {routes.projects.title}
          </NavLink>
        </Page>
        <Page>
          <NavLink
            to={routes.resume.path}
            onClick={toggleMenuVisibility}
            className="title-large"
            isActive={location.pathname === routes.resume.path}
          >
            {routes.resume.title}
          </NavLink>
        </Page>
        <Page>
          <ThemeSwitcher />
        </Page>
      </PagesList>
      {isHidden ? (
        <HamburgerMenu onClick={toggleMenuVisibility} />
      ) : (
        <CloseMenu onClick={toggleMenuVisibility} />
      )}
    </Nav>
  );
};

export default Navbar;
