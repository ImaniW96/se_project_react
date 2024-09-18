import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { signup, signin } from "../../utils/auth";
import { updateUser } from "../../utils/api";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { corrdinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  getItems,
  addItem,
  deleteItemById,
  getCurrentUser,
} from "../../utils/api";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/Register";
import LogInModal from "../LoginModal/LogIn";
import EditProfileModal from "../EditProfileModal/EditProfile";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SideBar from "../SideBar/SideBar";
import { likeCard } from "../../utils/api";

function App() {
  const navigate = useNavigate();
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
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  console.log(currentUser);
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

  function handleUpdateUserInfo(formData) {
    const token = localStorage.getItem("jwt");
    updateUser({ avatar: formData.imageUrl, name: formData.name }, token)
      .then((data) => {
        setCurrentUser(data.data);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}. Failed to update profile`);
      });
  }
  function handleRegisterModalSubmit({ name, email, password, avatarUrl }) {
    const token = localStorage.getItem("jwt");
    signup({ name, avatarUrl, email, password }, token)
      .then(() => {
        setIsLoggedIn(true);
        // log the user in here as well
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error, "Failed to sign up");
        alert("Failed to sign up");
      });
  }

  // const handleSignin = ({ email, password }) => {
  //   setIsLoggedIn(true);
  //   signin(email, password)
  //     .then((res) => {
  //       console.log(">> Login Response", res);

  //       localStorage.setItem("jwt", res.token);
  //       setIsLoggedIn(true);
  //       getCurrentUser();
  //       navigate("/profile");

  //       closeActiveModal();
  //     })
  //     .catch((err) => {
  //       console.error("Can not log in", err);
  //     });
  // };
  const handleSignin = ({ email, password }) => {
    signin(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        getCurrentUser(res.token).then((userData) => {
          // Eveything inside the getCurrentUser then block
          setIsLoggedIn(true);
          //set the current user
          navigate("/profile");
          closeActiveModal();
        });
      })
      .catch((err) => {
        console.error("Can not log in", err);
      });
  };
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    navigate("/");
    setIsLoggedIn(false);
  };
  const handleDeleteItem = (id) => {
    const token = localStorage.getItem("jwt");
    // Delete the item on the server
    return deleteItemById(id, token)
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
    const token = localStorage.getItem("jwt");
    // add the item to the server
    return addItem(values, token)
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

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    getCurrentUser(jwt)
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
        console.log(userData);
        // navigate("/profile");
        // setcurrentUser(userData);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked

    likeCard(id, isLiked, token)
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                    onCardLike={handleCardLike}
                    isAuthenticated={isLoggedIn}
                    // isLiked={isLiked}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleProfileChangeClick={handleProfileChangeClick}
                      handleLogOut={handleLogOut}
                      onCardLike={handleCardLike}
                      isAuthenticated={isLoggedIn}
                    />
                  </ProtectedRoute>
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
            handleLoginClick={handleLogInClick}
          />
          <LogInModal
            isOpen={activeModal === "log-in"}
            closeActiveModal={closeActiveModal}
            handleSignupClick={handleSignupClick}
            onLogin={handleSignin}
          />
          <EditProfileModal
            isOpen={activeModal === "change-data"}
            closeActiveModal={closeActiveModal}
            onEditProfile={handleUpdateUserInfo}
          />
          <Footer />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClick={closeActiveModal}
            handleDeleteItem={handleDeleteItem}
            // onCardLike={handleCardLike}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}
// props = {
//   activeModal: activeModal,
//   card: selectedCard,
//   onClick: closeActiveModal,
//   handleDeleteItem: handleDeleteItem,
// };

export default App;
