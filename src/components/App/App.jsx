import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { signup } from "../../utils/auth";

import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { corrdinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems, addItem, deleteItemById } from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/Register";
import LogInModal from "../LoginModal/LogIn";
import EditProfileModal from "../EditProfileModal/EditProfile";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const handleSignupClick = () => {
    setActiveModal("sign-up");
  };
  const handleLogInClick = () => {
    setActiveModal("log-in");
  };
  const handleProfileChangeClick = () => {
    setActiveModal("change-data");
  };

  // {
  //   email: "",
  //   password: "",
  //   name: "",
  //   avatarUrl: "",
  // }
  function handleRegisterModalSubmit({ name, email, password, avatarUrl }) {
    signup(name, avatarUrl, email, password)
      .then(() => {
        // log the user in here as well
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error, "Failed to sign up");
        alert("Failed to sign up");
      });
  }

  const handleDeleteItem = (id) => {
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
    return addItem(values)
      .then((item) => {
        // add the item on the dom
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
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
  // const handleCardLike = ({ id, isLiked }) => {
  //   const token = localStorage.getItem("jwt");
  //   // Check if this card is not currently liked
  //   !isLiked
  //     ? // if so, send a request to add the user's id to the card's likes array
  //       api
  //         // the first argument is the card's id
  //         .addCardLike(id, token)
  //         .then((updatedCard) => {
  //           setClothingItems((cards) =>
  //             cards.map((item) => (item._id === id ? updatedCard : item))
  //           );
  //         })
  //         .catch((err) => console.log(err))
  //     : // if not, send a request to remove the user's id from the card's likes array
  //       api
  //         // the first argument is the card's id
  //         .removeCardLike(id, token)
  //         .then((updatedCard) => {
  //           setClothingItems((cards) =>
  //             cards.map((item) => (item._id === id ? updatedCard : item))
  //           );
  //         })
  //         .catch((err) => console.log(err));
  // };
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            handleLoginClick={handleLogInClick}
            handleSignupClick={handleSignupClick}
            handleProfileChangeClick={handleProfileChangeClick}
            weatherData={weatherData}
            isLoggedIn={isLoggedIn}
          />
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
                  handleProfileChangeClick={handleProfileChangeClick}
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
        <RegisterModal
          isOpen={activeModal === "sign-up"}
          closeActiveModal={closeActiveModal}
          onSignup={handleRegisterModalSubmit}
        />
        <LogInModal
          isOpen={activeModal === "log-in"}
          closeActiveModal={closeActiveModal}
          onLogin={handleLogInClick}
        />
        <EditProfileModal
          isOpen={activeModal === "change-data"}
          closeActiveModal={closeActiveModal}
          onLogin={handleProfileChangeClick}
        />
        <Footer />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClick={closeActiveModal}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}
// props = {
//   activeModal: activeModal,
//   card: selectedCard,
//   onClick: closeActiveModal,
//   handleDeleteItem: handleDeleteItem,
// };

export default App;
