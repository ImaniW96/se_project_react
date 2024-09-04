import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LogInModal({ isOpen, closeActiveModal, onLogin }) {
  const [values, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
  };

  console.log({ values });
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Next"
      handleCloseClick={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Email
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
        Password
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
    </ModalWithForm>
  );
}
export default LogInModal;
