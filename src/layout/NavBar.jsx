import React from "react";
import "./NavBar.css";
import profilepic from "../assets/profilepic.jpg";
import Text from "../components/Text Components/Text";
const NavBar = () => {
  return (
    <header>
      <div className="navbar-container">
        <div className="nav-title">
          <Text
            label={"EventApp"}
            weight={"bold"}
            size={"h4"}
            lineheight={"l27"}
          />
        </div>
        <div className="nav-user">
          <div className="profile-name">
            <Text
              label={"Masha"}
              weight={"regular"}
              size={"h2"}
              lineheight={"l22"}
            />
          </div>
          <img src={profilepic} alt="profile pic" className="profile-pic" />
        </div>
      </div>
      <hr className="nav-divider" />
    </header>
  );
};

export default NavBar;
