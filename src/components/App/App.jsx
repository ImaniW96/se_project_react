import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
// import Api from "../../utils/api";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { corrdinates, APIkey } from "../../utils/constants";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTempatureUnitContext";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems, addItem, deleteItemById } from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";

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
  // api
  //   .getItems()
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  // const handleDeleteItem = (id) => {
  //   // delete the item on the server
  //   return deleteItemById(id).then(() => {
  //     const updatedClothingItems = clothingItems.filter(() => {
  //       setClothingItems(updatedClothingItems);
  //     }); // only keep the items that don't have the deleted item's id
  //     // setClothingItems(updatedClothingItems);
  //   });
  //   // delete the item on the dom. (use the filter method)
  // };
  const handleDeleteItem = (id) => {
    //deleteCard(id);
    // Delete the item on the server
    return deleteItemById(id)
      .then(() => {
        // Filter out the deleted item from clothingItems
        const updatedClothingItems = clothingItems.filter(
          (item) => item._id !== id
        );
        setClothingItems(updatedClothingItems); // Update state with filtered items
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleAddItemModalSubmit = (values) => {
    // add the item to the server
    return addItem(values).then((item) => {
      // add the item on the dom
      setClothingItems([...clothingItems, item]);
    });
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
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          onAddItem={handleAddItemModalSubmit}
        />
        <Footer />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClick={closeActiveModal}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}
// props = {
//   activeModal: activeModal,
//   card: selectedCard,
//   onClick: closeActiveModal,
//   handleDeleteItem: handleDeleteItem,
// };

export default App;
