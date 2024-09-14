import avatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

import "./SideBar.css";
function SideBar({ handleProfileChangeClick, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <div className="sidebar">
        <img
          src={currentUser.avatar}
          alt="Default avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div>
        <button
          className="sidebar__data_change"
          onClick={(e) => {
            handleProfileChangeClick(e);
          }}
          // isOpen={activeModal === "change-data"}
        >
          Change Profile Data
        </button>
        <button className="sidebar__logout" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </>
  );
}

export default SideBar;
