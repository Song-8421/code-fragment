// import "@renderer/assets/main.css";
import "@renderer/assets/tailwind.css";
import "@renderer/assets/global.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
