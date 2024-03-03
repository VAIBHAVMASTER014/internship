import React from "react";

const Foodlist = () => {
  const foodData = [
    {
      image: "Rectangle 15 copy.png",
      title: "Vadapav",
      time: "20 Min",
    },
    {
      image: "Rectangle 16 copy.png",
      title: "Panipuri",
      time: "20 Min",
    },
    {
      image: "Rectangle 17 copy.png",
      title: "Pavbhaji",
      time: "20 Min",
    },
    {
      image: "Rectangle 18 copy.png",
      title: "Icecream",
      time: "20 Min",
    },
    {
      image: "Rectangle 19 copy.png",
      title: "Sandwich",
      time: "20 Min",
    },
    {
      image: "Rectangle 20.png",
      title: "Pizza",
      time: "20 Min",
    },
  ];

  const showFood = foodData.map((data, index) => {
    return (
      <div className="food-item">
        <img src={`/images/${data.image}`} alt="" />
        <div className="food-content">
          <span>{data.title}</span>
          <p>{data.time}</p>
        </div>
      </div>
    );
  });
  return <div className="food-list">{showFood}</div>;
};

export default Foodlist;
