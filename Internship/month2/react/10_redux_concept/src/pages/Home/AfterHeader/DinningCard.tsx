import React from "react";

type DinningCardPropType  = { id: number, title: string, image: string, description: string }

const DinningCard:React.FC<{dinningData:DinningCardPropType}> = ({dinningData}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={dinningData.image} alt="" />
      </div>
      <div className="card-title">
        <h4>{dinningData.title}</h4>
        <p>{dinningData.description}</p>
      </div>
    </div>
  );
};

export default DinningCard;
