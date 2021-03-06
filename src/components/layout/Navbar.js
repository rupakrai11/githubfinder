import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar btn-dark">
      <h1>
        <i className={icon} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
};

export default Navbar;
