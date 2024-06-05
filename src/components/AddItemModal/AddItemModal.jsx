import React from "react";

const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      // isOpen={isOpen}
      isOpen={activeModal === "add-garment"}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="image Url"
        />
      </label>
      <legend className="modal__legend">Select the weather type:</legend>
      <fieldset className="modal__radio-buttons">
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio"
          name="weatherType"
        >
          {" "}
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
