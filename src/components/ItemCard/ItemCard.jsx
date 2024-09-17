import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  // const itemLikeButtonClassName = `...`;
  const currentUser = useContext(CurrentUserContext);
  // const isOwn = item.owner === currentUser._id;

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
          <button className={itemLikeButton} onClick={handleLikeClick}></button>
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
  // function handleLike(){}
}
export default ItemCard;
