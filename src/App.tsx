import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import "./theme.css";
import { ITheme, base, dark, device, light } from "./themes";
import { routes } from "./utils/routes";

export interface ThemeContextType {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

const themesMap: { light: ITheme; dark: ITheme } = {
  light,
  dark,
};

type themeMapType = keyof typeof themesMap;

export const ThemePreferenceContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  setCurrentTheme: (theme: string) => {},
});

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const theme = {
    ...base,
    colors: themesMap[currentTheme as themeMapType],
    device,
  };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <div
          style={{
            background: theme.colors.surface,
            height: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />

          <div
            id="router-container"
            style={{
              flex: "1 1 auto",
            }}
          >
            <Routes>
              <Route path={routes.home.path} element={<Home />} />
              <Route path={routes.blog.path} element={<Blog />} />
              <Route path={routes.projects.path} element={<Projects />} />
              <Route path={routes.resume.path} element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
