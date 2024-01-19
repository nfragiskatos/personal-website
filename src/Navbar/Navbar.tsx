import { useState } from "react";
import ThemeSwitcher from "../utils/components/ThemeSwitcher";
import { Nav, NavLink, Page, PagesList } from "./Navbar.styles";

enum PAGE {
  Home,
  Blog,
  PersonProjects,
}

const Navbar = () => {
  const [activePage, setActivePage] = useState<PAGE>(PAGE.Home);

  console.log(activePage === PAGE.Home);

  return (
    <Nav>
      <NavLink
        className="display-large"
        onClick={() => {
          setActivePage(PAGE.Home);
        }}
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Nicholas Fragiskatos
      </NavLink>
      <ThemeSwitcher />
      <PagesList>
        <Page
          isActive={activePage === PAGE.Home}
          onClick={() => {
            setActivePage(PAGE.Home);
          }}
        >
          <NavLink className="title-large">Home</NavLink>
        </Page>
        <Page
          isActive={activePage === PAGE.Blog}
          onClick={() => {
            setActivePage(PAGE.Blog);
          }}
        >
          <NavLink className="title-large">Blog</NavLink>
        </Page>
        <Page
          isActive={activePage === PAGE.PersonProjects}
          onClick={() => {
            setActivePage(PAGE.PersonProjects);
          }}
        >
          <NavLink className="title-large">Personal Projects</NavLink>
        </Page>
      </PagesList>
    </Nav>
  );
};

export default Navbar;
