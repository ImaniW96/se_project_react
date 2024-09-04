import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card card__profile">
      <h2 className="card__name">{item.name}</h2>
      <button className="card__like-button">{item.like}</button>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}
export default ItemCard;
