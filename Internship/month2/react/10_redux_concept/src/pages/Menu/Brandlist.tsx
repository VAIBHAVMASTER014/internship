import React from "react";

const Brandlist = () => {
  const BrandData = [
    {
      image: "Ellipse 1 copy.png",
      title: "La Pino'z Pizza",
    },
    {
      image: "Ellipse 3 copy.png",
      title: "Starbucks",
    },
    {
      image: "Ellipse 4.png",
      title: "KFC",
    },
    {
      image: "Ellipse 5.png",
      title: "Chipotle",
    },
    {
      image: "Ellipse 3 copy.png",
      title: "Starbucks",
    },
    {
      image: "Ellipse 1 copy.png",
      title: "La Pino'z Pizza",
    },
  ];

  const BrandLogo = BrandData.map((logo, index) => {
    return (
      <div className="list-item">
        <img src={`/images/${logo.image}`} alt="" />
        <span>{logo.title}</span>
      </div>
    );
  });
  return <div className="brand-list">{BrandLogo}</div>;
};

export default Brandlist;
