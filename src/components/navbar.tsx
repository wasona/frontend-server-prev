import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginClick = () => {
    // Simulate logging in, toggle the state
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    // Simulate logging out
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul>
        <div>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            {isLoggedIn ? (
              <div>
                <span>{"userName"}</span>
                <button onClick={handleLogoutClick}>Logout</button>
                <NavLink
                  to="/account"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Account Management
                </NavLink>
              </div>
            ) : (
              <button onClick={handleLoginClick}>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;