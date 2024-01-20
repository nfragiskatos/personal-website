import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Blog from "./pages/blog/components/Blog";
import Home from "./pages/home/Home";
import "./theme.css";
import { ITheme, base, dark, light } from "./themes";

export interface ThemeContextType {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

const themesMap = {
  light,
  dark,
};

export const ThemePreferenceContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  setCurrentTheme: (theme: string) => {},
});

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const theme = {
    ...base,
    colors: themesMap[currentTheme as keyof ITheme],
  };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <div className="surface">
          <Navbar />

          <div id="router-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          {/* <Hero /> */}
          <Footer />
          {/* <p
            className="on-surface-text"
            style={{
              fontSize: "2em",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            doloremque laudantium sed minima voluptatibus minus nostrum, dolore
            laborum amet debitis? Qui nobis magnam dicta recusandae delectus
            perferendis iste eius provident?
          </p> */}
        </div>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
