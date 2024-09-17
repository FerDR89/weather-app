import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactQueryProvider from "./api/reactQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
