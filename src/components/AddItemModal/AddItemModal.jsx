import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  // const [name, setName] = useState("");
  // const handleNameChange = (e) => {
  //   console.log(e);
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // const [link, setUrl] = useState("");
  // const handleUrlChange = (e) => {
  //   e.preventDefault();
  //   setUrl(e.target.value);
  // };
  // const [temp, setTemp] = useState("");
  // const handleTempChange = (e) => {
  //   e.preventDefault();
  //   setTemp(e.target.value);
  // };
  const [values, setValues] = useState({ name: "", imageUrl: "", weather: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); //values = {name:beanie, imageUrl: http:sdf, weather: 'hot' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values)
      .then(() => {
        closeActiveModal();
        setValues({ name: "", imageUrl: "", weather: "", onDone });
      })
      .catch();
  };

  console.log({ values });
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
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="image Url"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <legend className="modal__legend">Select the weather type:</legend>
      <fieldset className="modal__radio-buttons">
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="hot"
            value="hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="warm"
            value="warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="cold"
            value="cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
