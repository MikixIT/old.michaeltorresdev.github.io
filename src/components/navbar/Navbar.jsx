import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span>MT Dev</motion.span>
        <div className="social">
          <a href="https://github.com/MikixIT/">
            <img src="/src/assets/img/github-logo.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/michaeltorresdeveloper/">
            <img src="./src/assets/img/linkedin-logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
