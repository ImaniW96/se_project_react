import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { useContext } from "react";

 
function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const option = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  let weatherOption;

  console.log({ weatherData });
  if (!option) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];

    console.log({ weatherOption });
  } else {
    weatherOption = option;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
        {currentTemperatureUnit}{" "}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${
          weatherOption?.day ? "day" : "night"
        }time Weather:${weatherOption?.condition} weather`}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
