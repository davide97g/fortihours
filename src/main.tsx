import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="purple-dark text-foreground">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
