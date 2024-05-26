import "./ItemModal.css";
function ItemModal({ activeModal, onClick, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"} `}>
      <div className="modal__content modal__content_image modal__content_type_image">
        <button
          onClick={onClick}
          type="button"
          className="modal__close modal__close_image"
        ></button>
        <img src={card.link} alt={"profilepicture"} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">{card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
