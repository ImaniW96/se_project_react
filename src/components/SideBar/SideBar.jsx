import avatar from "../../assets/avatar.png";

import "./SideBar.css";
function SideBar({ isOpen, handleProfileChangeClick }) {
  return (
    <>
      <div className="sidebar">
        <img src={avatar} alt="Default avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
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
        <button className="sidebar__logout">Log out</button>
      </div>
    </>
  );
}

export default SideBar;
