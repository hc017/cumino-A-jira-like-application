import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import Nlogo from "./Cumin_logo.png";
import "./Navbar.css";

const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fas fa-house-user",
  },
  {
    title: "About",
    url: "#",
    cName: "nav-links",
    icon: "fas fa-circle-info",
  },
  {
    title: "Service",
    url: "#",
    cName: "nav-links",
    icon: "fas fa-briefcase",
  },
  {
    title: "Contact",
    url: "#",
    cName: "nav-links",
    icon: "fas fa-address-book",
  },
  {
    title: "Sign Up",
    url: "#",
    cName: "nav-links-mobile",
  },
];

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const CurrentUser = {
    result: {
      email: "hc@mail.com",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <img className="Nlgo" src={Nlogo} alt="" />
        <Link to="/" className="Ntitle">
          Cumin
        </Link>
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        {CurrentUser ? (
          <>
            <div className="chanel_logo_app">
              <p className="fsChar_logo_app">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="auth_btn">
              <BiUserCircle size={22} />
              <b>Sign In</b>
            </p>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
