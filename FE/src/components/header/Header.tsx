import { AuthContext, AuthContextType } from "@/contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  console.log(user);
  return (
    <header>
      <Link to="/">
        <img
          src="https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png"
          alt=""
          width={150}
        />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">admin</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        {user ? (
          <>
            <li>
              <span>Welcome, {user?.email}</span>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link to="/admin">You are admin?</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
              {"/"}
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
