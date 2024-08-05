import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/layout/AdminLayout";
import ClientLayout from "./components/layout/ClientLayout";
import CategoryForm from "./pages/admin/category/CategoryForm";
import ListCategory from "./pages/admin/category/ListCategory";
import ListProduct from "./pages/admin/product/ListProduct";
import ProductForm from "./pages/admin/product/ProductForm";
import ListUser from "./pages/admin/user/ListUser";
import AuthForm from "./pages/client/auth/AuthForm";
import Cart from "./pages/client/cart/Cart";
import Home from "./pages/client/home/Home";
import Shop from "./pages/client/shop/Shop";
import ProductDetail from "./pages/client/productdetail/ProductDetail";
import CheckOut from "./pages/client/orders/CheckOut";
import ForgotPassword from "./pages/client/forgotpassword/ForgotPassword";
import ThankYou from "./pages/client/thankyou/ThankYou";
import Order from "./pages/admin/order/Order";

function App() {
  return (
    <>
      <Routes>
      
      <Route>
          {/* client */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/login" element={<AuthForm isLogin/>}/>
            <Route path="/register" element={<AuthForm/>}/>
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
            {/* order */}
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/category-add" element={<ProductForm />} />
            <Route path="/admin/category/edit/:id" element={<ProductForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
