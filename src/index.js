import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./Assets/Global-styles/reset.scss";
import { BrowserRouter } from "react-router-dom";
import BePageRoute from "./Constanst/BePageRoute.Routes";
import PcMenu from "./Components/Global/Menu/PcMenu/PcMenu";
import BETop from "./Components/Global/BETop/BETop";
import { Provider } from "react-redux";
import LangStore from "./Store/Lang/Lang.store";

const root = ReactDOM.createRoot(document.getElementById("be-root"));
root.render(
  <Provider store={LangStore}>
    <React.StrictMode>
      <BrowserRouter>
        <PcMenu />
        <BETop />
        <BePageRoute />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
