import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
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
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        +Add clothes
      </button>
      {/* 
      <ToggleSwitch /> */}

      <div className="header__user-container">
        <Link className="header__link" to="profile">
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={avatar}
            alt={"TerrenceTegegne"}
            className="header__avatar"
          />
        </Link>
      </div>
    </header>
  );
}
export default Header;
