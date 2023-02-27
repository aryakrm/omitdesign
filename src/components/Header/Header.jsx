import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { useStore } from "../../store/projectsStore";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.scss";

function Header() {
  const [isShowed, setIsShowed] = useState(false);

  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

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
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Link to={"/home"}>
          <img className="logo" src="logo.png" alt="Omit Design Logo" />
        </Link>

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
            <NavLink to={"contact"}>
              {" "}
              <h2>Contact</h2>{" "}
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/omitdesign/"
              rel={"noreferrer"}
              target={"_blank"}
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
        <div onClick={menuTogglerHandler} className="hamburger">
          {active ? (
            <AiOutlineClose className="_icon" />
          ) : (
            <GiHamburgerMenu className="_icon" />
          )}
        </div>
        {active ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="side-menu"
            onClick={() => setActive(!active)}
          >
            <ul className="side-menu-list">
              <li>
                <NavLink to={"/home"}>
                  {" "}
                  <h2>Home</h2>{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to={"projects"}>
                  {" "}
                  <h2>+ Projects</h2>{" "}
                </NavLink>
              </li>
              {projects.map((project) => (
                <li
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="side-projects"
                >
                  <NavLink to={"/projects"}>
                    <p>+{project.name}</p>
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink to={"team"}>
                  {" "}
                  <h2>Team</h2>{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to={"contact"}>
                  {" "}
                  <h2>Contact</h2>{" "}
                </NavLink>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/omitdesign/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
        <ul
          className="projectsList"
          style={{ display: isShowed ? "block" : "none" }}
          onMouseOver={showDropdown}
          onMouseLeave={hideDropdown}
        >
          {projects.map((project) => (
            <li key={project.id} onClick={() => handleProjectClick(project)}>
              <NavLink to={"/projects"}>
                <p>+{project.name}</p>
              </NavLink>
            </li>
          ))}
          <sub>Designed by Omit Design</sub>
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header;
