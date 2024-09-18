import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LogInModal({ isOpen, closeActiveModal, onLogin }) {
  const [formData, setFormData] = useState({
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
    onLogin(formData);
  };

  // console.log({ values });
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Next"
      handleCloseClick={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="text"
          className="modal__input"
          id="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <div className="modal__button_container">
        <button type="submit" className="modal__add_submit">
          Next
        </button>
        <button type="submit" className="modal__login_submit">
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}
export default LogInModal;
