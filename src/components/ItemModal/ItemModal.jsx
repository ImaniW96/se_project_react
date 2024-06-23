import "./ItemModal.css";
function ItemModal({ activeModal, onClick, card, handelDeleteCard }) {
  const handelDeleteCardClick = () => {
    handelDeleteCard(id);
    closeActiveModal();
  };
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
            onClick={handelDeleteCardClick}
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
