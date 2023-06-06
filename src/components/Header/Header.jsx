import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <NavLink>home</NavLink>
          <NavLink>about</NavLink>
          <NavLink>contact</NavLink>
          <NavLink>blogs</NavLink>
        </nav>
        <div className="auth">
          <Link className="main-btn login">login</Link>
          <Link className="main-btn">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
