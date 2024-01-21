import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "../utils/components/ThemeSwitcher";
import { routes } from "../utils/routes";
import {
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
  const ref = useRef<HTMLElement>(null);

  console.log(`Height = ${height}`);

  const stickNavbar = () => {
    if (window !== undefined) {
      const currentScrollPosition = window.scrollY;

      setIsSticky(prevScrollPosition.current < currentScrollPosition);
      prevScrollPosition.current = currentScrollPosition;
    }
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
          <ProfilePicture src="/profile-picture.jpg" />
        </ProfilePictureWrapper>
        <NavTitle
          to={routes.home.path}
          // className="display-large"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Nicholas Fragiskatos
        </NavTitle>
      </TitleProfilePictureWrapper>
      <ThemeSwitcher />
      <PagesList>
        <Page>
          <NavLink
            to={routes.home.path}
            className="title-large"
            isActive={location.pathname === routes.home.path}
          >
            {routes.home.title}
          </NavLink>
        </Page>
        <Page>
          <NavLink
            to={routes.blog.path}
            className="title-large"
            isActive={location.pathname === routes.blog.path}
          >
            {routes.blog.title}
          </NavLink>
        </Page>
        <Page>
          <NavLink
            to={routes.projects.path}
            className="title-large"
            isActive={location.pathname === routes.projects.path}
          >
            {routes.projects.title}
          </NavLink>
        </Page>
      </PagesList>
    </Nav>
  );
};

export default Navbar;
