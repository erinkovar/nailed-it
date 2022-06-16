import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ObjectivePage from "./pages/Objective";
import HomePage from "./pages/Home";
import TeamsPage from "./pages/Teams";
import ThanksPage from "./pages/Thanks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="objective" element={<ObjectivePage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
