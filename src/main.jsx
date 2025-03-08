import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ChefApp from "./chef_app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChefApp />
  </StrictMode>
);
