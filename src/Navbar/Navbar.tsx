import { useLocation } from "react-router-dom";
import ThemeSwitcher from "../utils/components/ThemeSwitcher";
import { routes } from "../utils/routes";
import { Nav, NavLink, NavTitle, Page, PagesList } from "./Navbar.styles";

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavTitle
        to={routes.home.path}
        className="display-large"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Nicholas Fragiskatos
      </NavTitle>
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
