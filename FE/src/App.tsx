import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import instance from "./apis";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import EditProduct from "./pages/admin/product/EditProduct";

function App() {
  return (
    <>
    <Routes>
      <Route>
        {/* client */}
        <Route path="/">

        </Route>
        {/* admin */}
        <Route path="/admin">
        <Route path="/admin" element={<ListProduct/>}/>
        <Route path="/admin/product-add" element={<AddProduct/>}/>
        <Route path="/admin/product/edit/:id" element={<EditProduct/>}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
