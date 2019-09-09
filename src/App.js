import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main/";
import Routes from "./routes";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);
export default App;
