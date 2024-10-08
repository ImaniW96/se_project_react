import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  isAuthenticated,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {temperature}
          &deg; {currentTemperatureUnit}/ You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  isAuthenticated={isAuthenticated}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
