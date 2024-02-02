import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ManagedUIContext } from "./hooks/useUI.jsx";
import { ProvideCart } from "./hooks/useCart.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ManagedUIContext>
      <ProvideCart>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProvideCart>
    </ManagedUIContext>
  </React.StrictMode>
);
