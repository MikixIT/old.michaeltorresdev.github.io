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
          <a href="#">
            <img src="./src/assets/img/placeholder.png" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/img/placeholder.png" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/img/placeholder.png" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/img/placeholder.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
