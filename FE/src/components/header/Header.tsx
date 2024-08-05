
import { AuthContext, AuthContextType } from "@/contexts/AuthContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;

  return (
    <header className="bg-gray-900 p-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center text-white no-underline mb-2 lg:mb-0">
          <svg className="bi me-2 w-10 h-8" role="img" aria-label="Bootstrap">
            <use xlinkHref="#bootstrap" />
          </svg>
        </Link>
        <ul className="nav flex flex-wrap justify-center lg:justify-start">
          <li>
            <Link to="/" className="nav-link px-4 text-gray-400 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link px-4 text-white">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-4 text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/admin" className="nav-link px-4 text-white">
              Admin
            </Link>
          </li>
        </ul>
        <div className="text-end flex items-center">
          <Link to="/cart" className="text-white mr-4">
            <FaShoppingCart />
          </Link>
          <form className="relative mr-4">
            <input
              type="search"
              className="form-input bg-gray-800 text-white rounded-md pl-4 pr-10 py-2"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user?.email}</span>
              <button
                onClick={logout}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
              >
                Logout
              </button>
              {/* <Link to="/admin" className="text-yellow-500 hover:text-yellow-600">
                You are admin?
              </Link> */}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white border   hover:text-black px-4 py-2 rounded-md"
              >
                Sign-in
              </Link>
              <Link
                to="/register"
                className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md"
              >
                Sign-up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
