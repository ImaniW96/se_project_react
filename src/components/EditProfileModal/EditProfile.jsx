import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({
  isOpen,
  closeActiveModal,
  onEditProfile,
  currentUser,
}) {
  const currentuser = { CurrentUserContext };
  const [user, setuser] = useContext({
    name: "",
    imageUrl: "",
  });
  useEffect(() => {
    if (currentUser) {
      setuser(currentUser);
    }
  }, []);
  const [values, setFormData] = useState({
    name: user.name,
    imageUrl: user.imageUrl,
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
    onEditProfile(values);
  };

  console.log({ values });
  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save changes"
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
        Avatar Url{""}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Avatar Url"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="modal__add_submit">
        Save Changes
      </button>
    </ModalWithForm>
  );
}
export default EditProfileModal;
