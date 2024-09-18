import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function EditProfileModal({
  isOpen,
  closeActiveModal,
  onEditProfile,
  // currentUser,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [user, setUser] = useState({ name: "", imageUrl: "" });
  // useEffect(() => {
  //   if (currentUser) {
  //     setuser({ name: currentUser.name, imageUrl: currentUser.avatar });
  //   }
  // }, []);
  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser.name,
        imageUrl: currentUser.avatar, // assuming avatar is the imageUrl
      });
    }
  }, [currentUser]);

  // const [values, setFormData] = useState({
  //   name="",
  //  imageUrl=""

  // });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile(user);
  };

  // console.log({ values });
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
          // value={values.name}
          value={user.name}
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
          // value={values.imageUrl}
          value={user.imageUrl}
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

// import React, { useState, useEffect, useContext } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

// function EditProfileModal({ isOpen, closeActiveModal, onEditProfile }) {
//   const currentUser = useContext(CurrentUserContext);

//   const [values, setValues] = useState({
//     name: currentUser.name || "",
//     imageUrl: currentUser.imageUrl || "",
//   });

//   useEffect(() => {
//     if (currentUser) {
//       setValues({
//         name: currentUser.name,
//         imageUrl: currentUser.imageUrl,
//       });
//     }
//   }, [currentUser]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onEditProfile(values);
//   };

//   return (
//     <ModalWithForm
//       title="Change Profile Data"
//       buttonText="Save changes"
//       handleCloseClick={closeActiveModal}
//       isOpen={isOpen}
//       onSubmit={handleSubmit}
//     >
//       <label htmlFor="name" className="modal__label">
//         Name
//         <input
//           type="text"
//           className="modal__input"
//           id="name"
//           placeholder="Name"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label htmlFor="imageUrl" className="modal__label">
//         Avatar Url
//         <input
//           type="text"
//           className="modal__input"
//           id="imageUrl"
//           placeholder="Avatar Url"
//           name="imageUrl"
//           value={values.imageUrl}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit" className="modal__add_submit">
//         Save Changes
//       </button>
//     </ModalWithForm>
//   );
// }

// export default EditProfileModal;
