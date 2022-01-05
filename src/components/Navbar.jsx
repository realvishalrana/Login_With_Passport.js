import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Passport</span>
      <ul className="list">
        <li className="listitem">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listitem">vishalrana</li>
        <li className="listitem">Logout</li>
      </ul>
    </div>
  );
};
