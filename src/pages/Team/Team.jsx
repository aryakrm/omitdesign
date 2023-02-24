import React from "react";
import "./Team.scss";
import { motion } from "framer-motion";

function Team() {
  return (
    <motion.div
      className="Team"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Our Team</h1>
      <div>
        <h3>İris Gül / Mimar</h3>
        <h5>
          Architecture, <br /> Bilkent Üniversitesi 2016
        </h5>
        <p>iris@omitdesign.com</p>
      </div>
      <div>
        <h3>Merve Tuna Topdemir / İç Mimar</h3>
        <h5>
          Interior Architecture and Environmental Design, <br /> Bilkent
          University 2016 <br /> Domus Academy Milano 2017
        </h5>
        <p>tuna@omitdesign.com</p>
      </div>
    </motion.div>
  );
}

export default Team;
