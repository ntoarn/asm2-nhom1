import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { CategoryProvider } from "./contexts/CategoryContext.tsx";
import { UserProvider } from "./contexts/AuthContext.tsx";
import { AuthProvider } from "./contexts/UserContext.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CategoryProvider>
          <AuthProvider>
            <UserProvider>
            
              <App />
              
            </UserProvider>
          </AuthProvider>
        </CategoryProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
