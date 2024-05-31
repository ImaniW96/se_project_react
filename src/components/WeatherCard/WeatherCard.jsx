import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTempatureUnitContext";
// import currentTemperatureUnit from currentTemperatureUnit
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  let weatherOption;

  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : " night"];
  } else {
    weatherOption = filteredOptions[0];
  }
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp.F[currentTemperatureUnit]} &deg; F{" "}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
