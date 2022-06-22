import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Login } from '@pages';
import GlobalStyles from './themes/main/global-styles';
import theme from './themes/main/theme';
import store from './store/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="/sign-up" />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
