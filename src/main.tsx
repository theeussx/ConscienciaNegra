import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource/atkinson-hyperlegible/latin-400.css";
import "@fontsource/atkinson-hyperlegible/latin-700.css";
import "@fontsource/atkinson-hyperlegible/latin-400-italic.css";
import "./index.css";
import { palette } from "./design/tokens";
import App from "./App";

for (const [name, color] of Object.entries(palette)) {
  const cssName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  document.documentElement.style.setProperty(`--palette-${cssName}`, color);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
