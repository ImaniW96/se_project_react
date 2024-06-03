import avatar from "../../assets/avatar.png";
function SideBar() {
  return (
    <div className="sidebar">
      <image src={avatar} alt="Default avatar" />
      <p className="sidebar__username"></p>
    </div>
  );
}

export default SideBar;
