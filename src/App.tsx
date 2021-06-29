import React from "react";

import { BrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Dashboard />
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
