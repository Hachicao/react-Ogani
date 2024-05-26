import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./GUI/User/Pages/Home";
import reportWebVitals from "./reportWebVitals";
import { ProductCategory } from "./GUI/User/Pages/ProductCategory";
import { ProductDetail } from "./GUI/User/Pages/ProductDetail";
import Dashboard from "./GUI/Admin/Pages/Dashboard";
import UserManagement from "./GUI/Admin/Pages/UserManagement";
import ProductManagement from "./GUI/Admin/Pages/ProductManagement";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
