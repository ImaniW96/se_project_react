import "./WeatherCard.css";
import sunshine from "../../assets/sunshine.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F </p>
      <img src={sunshine} alt="sunshine" className="weather-card__image" />
    </section>
  );
}
export default WeatherCard;
