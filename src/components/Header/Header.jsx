import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { useStore } from "../../store/projectsStore";
import "./Header.scss";

function Header() {
  const [isShowed, setIsShowed] = useState(false);

  const projects = useStore((state) => state.projects);
  const select = useStore((state) => state.handleProjectClick);

  const handleProjectClick = (project) => {
    select(project);
  };

  const showDropdown = () => {
    setIsShowed(true);
  };
  const hideDropdown = () => {
    setIsShowed(false);
  };

  return (
    <header>
      <nav>
        <img className="logo" src="logo.png" alt="Omit Design Logo" />
        <ul className="nav-menu">
          <NavLink
            className={(isActive) => (isActive ? "active" : "inactive")}
          ></NavLink>
          <li>
            <NavLink to={"/home"}>
              {" "}
              <h2>Home</h2>{" "}
            </NavLink>
          </li>

          <li onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
            <NavLink to={"projects"}>
              {" "}
              <h2>+ Projects</h2>{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to={"team"}>
              {" "}
              <h2>Team</h2>{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to={"hire-us"}>
              {" "}
              <h2>Hire Us</h2>{" "}
            </NavLink>
          </li>
          <li>
            <a>
              <BsInstagram />
            </a>
          </li>
        </ul>
        <ul
          className="projectsList"
          style={{ display: isShowed ? "block" : "none" }}
          onMouseOver={showDropdown}
          onMouseLeave={hideDropdown}
        >
          {projects.map((project) => (
            <li key={project.id} onClick={() => handleProjectClick(project)}>
              <NavLink to={"/projects"}>
                <p>{project.name}</p>
              </NavLink>
            </li>
          ))}
          <sub>Designed by Omit Design</sub>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
