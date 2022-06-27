import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Login, Shows, Profiles, Home } from '@pages';
import {
  HOME_URL, LOGIN_URL, MOVIES_URL, MY_LIST_URL, PROFILES_URL, SHOWS_URL, TV_SHOWS_URL,
} from '@url-paths';
import { Guard } from '@components';
import GlobalStyles from './themes/main/global-styles';
import theme from './themes/main/theme';
import store from './store/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Home />} path={HOME_URL} />
          <Route element={<h1>Olá</h1>} path={HOME_URL} />
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Guard><Profiles /></Guard>} path={PROFILES_URL} />
          <Route element={<Guard><Shows /></Guard>} path={SHOWS_URL} />
          <Route element={<Guard><Shows /></Guard>} path={MOVIES_URL} />
          <Route element={<Guard><Shows /></Guard>} path={TV_SHOWS_URL} />
          <Route element={<Guard><Shows /></Guard>} path={MY_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
