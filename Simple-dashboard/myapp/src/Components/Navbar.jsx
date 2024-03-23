import React from "react";
import "./navbar.css";
import logo from "../Assests/logo.png"

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>

      <div className="Menu">
        <div>

          <ul>

            <li>Home </li>

            <li className="dropdown">
              Catogories{" "}
              <img
                src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                width={10}
              />
              <div className="dropdown-content">
                <a href="#">Male</a>
                <a href="#">Womens</a>
                <a href="#">Jwellary</a>
              </div>
            </li>

            <li>About</li>

            <li>Contact</li>

            <li className="dropdown">
              More{" "}
              <img
                src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                width={10}
              />
              <div className="dropdown-content">
                <a href="#">Feed</a>
                <a href="#">Social</a>
                <a href="#">Community</a>
              </div>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="Leftcontent">
        <div>
          <div>Login</div>
        </div>

        <div>
          <div>Get started</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
