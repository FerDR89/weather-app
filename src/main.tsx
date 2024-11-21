import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ReactQueryProvider } from "@services";
import store from "@store";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </Provider>
  </StrictMode>,
);
