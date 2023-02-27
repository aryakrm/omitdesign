import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;
