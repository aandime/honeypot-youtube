import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./components/screens/Home";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);