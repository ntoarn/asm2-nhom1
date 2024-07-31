import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { CategoryProvider } from "./contexts/CategoryContext.tsx";
import { UserProvider } from "./contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
       <CategoryProvider>
       <UserProvider>
       <App />
       </UserProvider>
       </CategoryProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

