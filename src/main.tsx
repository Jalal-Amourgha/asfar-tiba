import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import "./index.css";

import App from "./App.tsx";
import { AppWrapper } from "./context/index.tsx";
import { Navbar } from "./components/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <Navbar />
      <App />
    </AppWrapper>
  </StrictMode>
);
