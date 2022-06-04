import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { Login, MovieList, LOGIN_URL, MOVIE_LIST_URL } from "./screens"
import { GlobalStyles } from "./themes/main/global-styles";
import theme from "./themes/main/theme";


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL}/>
          <Route element={<MovieList />} path={MOVIE_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;