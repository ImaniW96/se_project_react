import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };
  const [temp, setTemp] = useState("");
  const handleTempChange = (e) => {
    e.preventDefault();
    setTemp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, temp });
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      handleCloseClick={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="image Url"
          onChange={handleUrlChange}
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
            onChange={handleTempChange}
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
            onChange={handleTempChange}
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio"
          name="weatherType"
          onChange={handleTempChange}
        >
          {" "}
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            onChange={handleTempChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
