import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LogInModal({ isOpen, closeActiveModal, onLogin, handleSignupClick }) {
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
          id="Email"
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
          id="Password"
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
        <button
          type="button"
          className="modal__login_submit"
          onClick={handleSignupClick}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}
export default LogInModal;
