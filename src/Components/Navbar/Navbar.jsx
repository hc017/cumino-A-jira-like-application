import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Navbar() {
  const [clicked, setClicked] = useState(false); // Initialize state using useState
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(clicked); // Update state using setClicked
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
        Cumin <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        {CurrentUser ? ( // If there is a CurrentUser
          <>
            {/* Channel logo */}
            <div className="chanel_logo_app">
              <p className="fsChar_logo_app">
                {/* Displaying user's initial */}
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          // If there is no CurrentUser
          <>
            {/* Sign In button */}
            <p className="auth_btn">
              <BiUserCircle size={22} /> {/* User Circle icon */}
              <b>Sign In</b> {/* Sign In text */}
            </p>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
