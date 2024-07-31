import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? (
    <Outlet />
  ) : (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Hello Admin</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/hosts" className="hover:underline">
              Quản lý host
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Xem thống kê
            </Link>
          </li>
        </ul>
      </header>
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4">
          <div className="sidebar">
            <ul className="space-y-2">
              <li>
                <Link to="/admin" className="block p-2 hover:bg-gray-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/user" className="block p-2 hover:bg-gray-200">
                  User
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/product"
                  className="block p-2 hover:bg-gray-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/category"
                  className="block p-2 hover:bg-gray-200"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/brands"
                  className="block p-2 hover:bg-gray-200"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
