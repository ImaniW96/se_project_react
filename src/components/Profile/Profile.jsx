import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";
function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleProfileChangeClick,
  handleLogOut,
  onCardLike,
  isAuthenticated,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleProfileChangeClick={handleProfileChangeClick}
          handleLogOut={handleLogOut}
          // isOpen={activeModal === "change-data"}
        />
      </section>
      <section className="profile__clothing-item">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
          isAuthenticated={isAuthenticated}
        />
      </section>
    </div>
  );
}

export default Profile;
