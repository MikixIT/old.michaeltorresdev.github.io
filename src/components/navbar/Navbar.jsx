import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* {Sidebar} */}
      <div className="wrapper">
        <span>MT Dev</span>
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
