import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { CategoryProvider } from "./contexts/CategoryContext.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <CategoryProvider>
          <AuthProvider>
            <UserProvider>
            <App />
            </UserProvider>
          </AuthProvider>
        </CategoryProvider>
      </ProductProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
