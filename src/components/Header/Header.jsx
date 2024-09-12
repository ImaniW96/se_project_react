import "./Header.css";
import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleSignupClick,
  handleLoginClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt={logo} />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />

      {isLoggedIn ? (
        <div className="header__user-container">
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            +Add clothes
          </button>
          <Link className="header__link" to="/profile">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="header__avatar"
            />
          </Link>
        </div>
      ) : (
        <>
          <button
            className="header__registration-button"
            onClick={handleSignupClick}
          >
            Sign up
          </button>
          <button
            className="header__registration-button"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}
export default Header;
