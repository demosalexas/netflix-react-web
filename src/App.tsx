import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Login, MovieList, LOGIN_URL, MOVIE_LIST_URL } from "./screens"
import { GlobalStyles } from "./themes/main/global-styles";
import theme from "./themes/main/theme";
import store from "./store/store/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Login />} path={LOGIN_URL}/>
            <Route element={<MovieList />} path={MOVIE_LIST_URL} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;