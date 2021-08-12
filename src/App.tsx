import { BrowserRouter } from 'react-router-dom';

import { Header } from 'components';
import GlobalStyle from 'styles/GlobalStyles';

import { Routes } from 'routes';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
    </>
  );
}
