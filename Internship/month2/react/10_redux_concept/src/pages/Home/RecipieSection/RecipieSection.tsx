import { useState } from "react";

// imported files
import RecipieCard from "./RecipieCard";
import {
  useAppSelector,
  useAppDispatch,
  fetchFoodByCategory,
} from "../../../redux/foodSlice";

// css files
import "./RecipieSection.css";

const RecipieSection = () => {
  const allFood = useAppSelector((state) => state.food.food);
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useAppDispatch();

  const foodCategoryList = ["Pizza", "Sides", "Burger", "Dessert", "Drinks"];
  const content = allFood.map((food, index) => (
    <RecipieCard key={index} foodItem={food} />
  ));

  const foodCategoryHandler = (category: string) => {
    setSelectedCategory(category);
    dispatch(fetchFoodByCategory(category.toLowerCase()));
  };

  return (
    <div>
      <div className="recipie-section">
        <div className="recipie-section-title">
          <img src="./assets/Group 5.png" alt="" />
          <span className="recipie-title">Popular Recipes</span>
          <img src="./assets/Vector.png" alt="" />
        </div>
        <ul className="recipie-name">
          {foodCategoryList.map((recipie, index) => (
            <li
              key={index}
              className={selectedCategory === recipie ? "active" : ""}
              onClick={() => foodCategoryHandler(recipie)}
            >
              {recipie}
            </li>
          ))}
        </ul>
        <div className="recipie-card-section">{content}</div>
      </div>
      <div className="delivery-section">
        <div className="delivery-section-title">
          Fastest food <span>delivery</span>
          <br />
          in the town
        </div>
      </div>
      <div className="food-image">
        <div className="burger">
          {/* <img src="/images/Rectangle 14.png" alt="food images" /> */}
          <span>Buy 2 get 1 free</span>
        </div>
        <div className="food-sub-image">
          <img src="/images/Rectangle 15.png" alt="food images" />
          <img src="/images/Rectangle 16.png" alt="food images" />
        </div>
      </div>
    </div>
  );
};

export default RecipieSection;
