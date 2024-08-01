import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./components/layout/ClientLayout";
import ListProduct from "./pages/admin/product/ListProduct";
import AdminLayout from "./components/layout/AdminLayout";
import ProductForm from "./pages/admin/product/ProductForm";
import ListCategory from "./pages/admin/category/ListCategory";
import ListUser from "./pages/admin/user/ListUser";
import CategoryForm from "./pages/admin/category/CategoryForm";
import Home from "./pages/client/Home";
import ProductDetail from "./pages/client/ProductDetail";
import AuthForm from "./pages/client/AuthForm";

function App() {
  return (
    <>
      <Routes>
        <Route>
          {/* client */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/login" element={<AuthForm  />} />
            <Route path="/register" element={<AuthForm isRegister  />} />
          </Route>
          {/* admin */}
          {/* product */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/product" element={<ListProduct />} />
            <Route path="/admin/product-add" element={<ProductForm />} />
            <Route path="/admin/product/edit/:id" element={<ProductForm />} />
            {/* category */}
            <Route path="/admin/category" element={<ListCategory />} />
            <Route path="/admin/category-add" element={<CategoryForm />} />
            <Route path="/admin/category/edit/:id" element={<CategoryForm />} />
            {/* user */}
            <Route path="/admin/user" element={<ListUser />} />
            <Route path="/admin/category-add" element={<ProductForm />} />
            <Route path="/admin/category/edit/:id" element={<ProductForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
