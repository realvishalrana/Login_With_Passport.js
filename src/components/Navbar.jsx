import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          My App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listitem">
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listitem">Vishal Rana</li>
          <li className="listitem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};
