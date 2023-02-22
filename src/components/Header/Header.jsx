import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img className="logo" src="logo.png" alt="Omit Design Logo" />

        <ul className="nav-menu">
          <li>
            <Link to={"/"}>
              {" "}
              <h2>Home</h2>{" "}
            </Link>
          </li>

          <li>
            <Link to={"projects"}>
              {" "}
              <h2>+ Projects</h2>{" "}
            </Link>
          </li>

          <li>
            <Link to={"team"}>
              {" "}
              <h2>Team</h2>{" "}
            </Link>
          </li>

          <li>
            <Link to={"hire-us"}>
              {" "}
              <h2>Hire Us</h2>{" "}
            </Link>
          </li>
          <li>
            <a>
              <BsInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
