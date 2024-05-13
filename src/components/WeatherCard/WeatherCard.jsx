import sunshine from "../../assets/sunshine.png"
function WeatherCard() {
  return (
    <section className="weather-card">
       <p className="weather-card__temp">75 &deg; F</p>
      <img src={sunshine} alt="sunshine" className="weather-card__image"/>
    </section>
  );
}
export default WeatherCard;
