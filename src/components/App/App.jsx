import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";

import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { corrdinates, APIkey } from "../../utils/constants";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTempatureUnitContext";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems } from "../../utils/api";
import AddItemModal from "../../AddItemModal/AddItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 998 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const isOpen = activeModal !== null;
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    getWeather(corrdinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
        console.log(data);
      })
      .catch(console.err);
  }, []);
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
        </div>
        <ModalWithForm
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
          // isOpen={isOpen}
          isOpen={activeModal === "add-garment"}
        >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{""}
            <input
              type="text"
              className="modal__input"
              id="imageUrl"
              placeholder="image Url"
            />
          </label>
          <legend className="modal__legend">Select the weather type:</legend>
          <fieldset className="modal__radio-buttons">
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              {" "}
              <input
                id="hot"
                type="radio"
                className="modal__radio-input"
                name="weatherType"
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              {" "}
              <input
                id="warm"
                type="radio"
                className="modal__radio-input"
                name="weatherType"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
              name="weatherType"
            >
              {" "}
              <input
                id="cold"
                type="radio"
                className="modal__radio-input"
                name="weatherType"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>

        <Footer />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClick={closeActiveModal}
        />
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;
