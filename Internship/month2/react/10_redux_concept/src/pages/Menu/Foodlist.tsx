import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// imporeted files
import { useAppSelector, useAppDispatch } from "../../redux/foodSlice";
import { redirectToBrand } from "../../redux/brandSlice";

interface foodType {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  price: string;
  quantity: number;
  category: string;
}

const Foodlist: React.FC = () => {
  const brandData = useAppSelector((state) => state.food.food);
  const dispatch = useAppDispatch();
  let start = Math.floor(Math.random() * (brandData.length - 6));
  let end = start + 6 || 0 + 6;
  const navigate = useNavigate();
  const foodClickHandler = (food: foodType) => {
    dispatch(redirectToBrand(food));
    navigate("/menu/brand");
  };
  const showFood = brandData.slice(start, end).map((data, index) => {
    return (
      <NavLink to={`${data.id}/${data.category}`} key={index}>
        <div className="food-item" onClick={() => foodClickHandler(data)}>
          <img src={`/apiImages/${data.image}`} alt="" />
          <div className="food-content">
            <span>{data.title}</span>
            <p>{data.time}</p>
          </div>
        </div>
      </NavLink>
    );
  });
  return <div className="food-list">{showFood}</div>;
};

export default Foodlist;
