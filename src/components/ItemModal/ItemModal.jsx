import "./ItemModal.css";
function ItemModal({ activeModal, onClick, card, handleDeleteItem }) {
  const handleDeleteCardClick = () => {
    handleDeleteItem(card._id);
    onClick();
  };
  // const isOwn = selectedCard.owner === currentUser._id;

  // // Creating a variable which you'll then set in `className` for the delete button
  // const itemDeleteButtonClassName = `item__delete-button ${
  //   isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  // }`;
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"} `}>
      <div className="modal__content modal__content_image modal__content_type_image">
        <button
          onClick={onClick}
          type="button"
          className="modal__close modal__close_image"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>

          <p className="modal__weather">
            <span className="modal__weather-caption">Weather:</span>{" "}
            {card.weather}
          </p>
          <button
            type="button"
            className="modal__delete-btn"
            onClick={handleDeleteCardClick}
          >
            {" "}
            Delete card
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
