import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTempatureUnitContext";
const ToggleSwitch = () => {
  // const [currentTemperatureUnit, handleToggleChange] = useState("C");
  // const handleChange = (e) => {
  //   if (currentTemperatureUnit === "C") handleToggleChange("F");
  //   if (currentTemperatureUnit === "F") handleToggleChange("C");
  // };
  // console.log(currentTemperatureUnit);
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    currentTemperatureUnitContext
  );
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__sider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;