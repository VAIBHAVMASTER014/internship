import React, { useState, useEffect } from "react";

//imported files
import { useAppSelector, useAppDispatch } from "../../../redux/foodSlice";
import { fetchDataByCategory } from "../../../redux/brandSlice";

// css files
import "./AvailableItem.css";
import AvailableItemCard from "./AvailableItemCard";
import { useParams } from "react-router-dom";

const AvailableItems = () => {
  let { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useAppDispatch();
  const availCategory = useAppSelector((state) => state.brand.BrandState);

  useEffect(() => {
    const objectAvailable = availCategory?.availableCategory.find(
      (avail) => Object.values(avail)[0] === category
    );
    const avail = Object.keys(
      availCategory?.availableCategory.find(
        (avail) => Object.values(avail)[0] === category
      ) || { hello: "world" }
    );

    if (category) {
      setSelectedCategory(avail[0]);
      dispatch(fetchDataByCategory(objectAvailable));
    } else {
      setSelectedCategory("Recommended");
    }
  }, [category, setSelectedCategory, availCategory, dispatch]);

  const filterByBrandCategory = (brandCategory: string | object) => {
    const value = { ...Object.keys(brandCategory) };
    brandCategory === "allData"
      ? setSelectedCategory("Recommended")
      : setSelectedCategory(value[0]);
    dispatch(fetchDataByCategory(brandCategory));
  };

  const leftSidebar = availCategory?.availableCategory.map((data, index) => (
    <li
      key={index}
      className={
        selectedCategory === { ...Object.keys(data) }[0]
          ? "selected"
          : "not-selected"
      }
      onClick={() => filterByBrandCategory(data)}
    >
      {`${Object.keys(data)} `}
    </li>
  ));
  return (
    <div className="available-item">
      <div className="clicked-section">
        <span>Order Online</span>
      </div>
      <div className="visible-section">
        <div className="left-sidebar">
          <ul className="item-link">
            <li
              className={
                selectedCategory === "Recommended" ? "selected" : "not-selected"
              }
              onClick={() => filterByBrandCategory("allData")}
            >
              Recommended
            </li>
            {leftSidebar}
          </ul>
        </div>
        <hr />
        <div className="right-scrollbar">
          <div className="selected-link">{selectedCategory}</div>
          <AvailableItemCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableItems;
