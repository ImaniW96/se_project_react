import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
function ItemCard({ item, onCardClick, onCardLike, isAuthenticated }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle isAuthenticated state for testing purposes
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((likeId) => likeId === currentUser?._id);

  const itemLikeButton = isLiked
    ? "card__like-button-active"
    : "card__like-button";

  const handleLikeClick = (e) => {
    e.preventDefault();

    onCardLike(item._id, isLiked);
  };

  console.log(isLiked);
  return (
    <>
      <li className="card card__profile">
        <div className="card__header">
          <h2 className="card__name">{item.name}</h2>
          {isAuthenticated && (
            <button
              className={itemLikeButton}
              onClick={handleLikeClick}
            ></button>
          )}
        </div>
        <img
          onClick={handleCardClick}
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
        />
      </li>
    </>
  );
}
export default ItemCard;
