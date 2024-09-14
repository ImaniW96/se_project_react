import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  // const itemLikeButtonClassName = `...`;
  const currentUser = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser._id;
  const isLiked = item.likes.some((likeId) => likeId === userData._id);

  // const itemLikeButtonClassName = isLiked
  //   ? "card__like-button-active"
  //   : "card__like-button";

  // const handleLikeClick = (e) => {
  //   e.preventDefault();

  //   onCardLike(item, isLiked);

  // };
  return (
    <>
      <li className="card card__profile">
        <h2 className="card__name">{item.name}</h2>
        {isLiked && <button className="card__like-button">{item.like}</button>}
        <img
          onClick={handleCardClick}
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
        />
      </li>
    </>
  );
  // function handleLike(){}
}
export default ItemCard;
