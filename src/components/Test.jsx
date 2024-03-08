import React, { useState } from "react";
import { motion } from "framer-motion";

function Test() {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 1000,
      transition: { type: "spring", duration: 2 },
    },
    hidden: { opacity: 0, scale: 0 },
    transition: { type: "spring", duration: 1 },
  };

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        animate={open ? "visible" : "hidden"}
        // transition={{ duration: 2 }}
        drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Open/Close</button>
    </div>
  );
}

export default Test;
