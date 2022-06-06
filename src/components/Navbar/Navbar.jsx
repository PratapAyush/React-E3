import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
const Link = <a href="/">Home</a>;

<NavLink to="/react">
  React
</NavLink>

const Navbar = () => {

  const { isAuth, logout } = useContext(AuthContext);
  const { ItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      logout();
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">Log</Link>
      <span data-cy="navbar-cart-items-count">
        {/* count here */} Cart: {ItemsCount && `(${cartItemsCount})`}
        </span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
      {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;