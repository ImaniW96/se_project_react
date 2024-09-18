import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  closeActiveModal,
  onSignup,
  handleLoginClick,
}) {
  const [values, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
    onSignup(values);
  };

  console.log({ values });
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      buttonLoginText="Or Log in"
      handleCloseClick={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className=" modal__label">
        Email
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name
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
        Avatar Url
        <input
          type="text"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar Url"
          name="avatarUrl"
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>
      <div className="modal__button_container">
        <button type="submit" className="modal__add_submit">
          Sign up
        </button>
        <button
          type="button"
          className="modal__login_submit"
          onClick={handleLoginClick}
        >
          Or Log in
        </button>
      </div>
    </ModalWithForm>
  );
}
export default RegisterModal;
