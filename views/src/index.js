import React from "react";
import ReactDOM from "react-dom/client";
import { App, router } from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App Provider as root to provide context to all
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
