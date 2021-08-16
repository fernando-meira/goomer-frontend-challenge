import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store/index';
import { Header } from 'components';
import GlobalStyle from 'styles/GlobalStyles';

import { Routes } from 'routes';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
