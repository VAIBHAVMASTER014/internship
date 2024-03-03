import React from "react";
import DinningCard from "./DinningCard";
// css file
import "./AfterHeader.css";

const AfterHeader: React.FC = () => {
  const dinningData: {
    id: number;
    title: string;
    image: string;
    description: string;
  }[] = [
    {
      id: 1,
      title: "Dinning out",
      image: "images/Rectangle 7.png",
      description: "Explore curated list of top restaurants.",
    },
    {
      id: 2,
      title: "Dinning out",
      image: "images/Rectangle 9.png",
      description: "Explore curated list of top restaurants.",
    },
    {
      id: 3,
      title: "Dinning out",
      image: "images/Rectangle 11.png",
      description: "Explore curated list of top restaurants.",
    },
  ];

  const content = dinningData.map((data) => <DinningCard dinningData={data} />);

  return <div className="dinning-out">{content}</div>;
};

export default AfterHeader;
