import React, { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleBut from "./toggleBut/ToggleBut";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 15,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 45px)",
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 350,
      damping: 60,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBut setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
