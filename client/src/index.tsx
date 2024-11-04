// @ts-nocheck

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { store, Persistor } from "./stores/stores";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
