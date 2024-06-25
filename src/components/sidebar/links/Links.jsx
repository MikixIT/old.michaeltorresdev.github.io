import "./links.scss";
import "../sidebar.scss";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const sections = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {sections.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileTap={{ scale: 0.7 }}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
