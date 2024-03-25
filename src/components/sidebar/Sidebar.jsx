import React from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleBut from "./toggleBut/ToggleBut";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="background">
        <Links />
      </div>
      <ToggleBut />
    </div>
  );
}

export default Sidebar;
