import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

// import { defaultClothingItems } from "../../utils/constants";
function ClothesSection({ handleCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes__button">
        <p className="clothes-section_your-itemsText">Your items</p>
        <button className="clothing-section_addBtn">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default ClothesSection;
