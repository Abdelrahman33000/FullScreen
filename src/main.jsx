import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import { LoadingMode } from "./components/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense fallback={<LoadingMode />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
