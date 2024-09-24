import React from "react";
import { NavLink } from "react-router-dom";

const isLoggedIn: boolean = true;

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        padding: "0.5rem", // Reduced padding to make the navbar less thick
        background: "#f8f9fa",
        borderBottom: "1px solid #ddd",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <li style={{ marginRight: "1rem" }}>
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
                <button>Logout</button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
