import React from 'react';
import "./Card.css";

function Card() {
    const dataOfCard = [
        {
          title: "Components",
          image: componentsImage,
          description:
            "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
        },
        {
          title: "State",
          image: stateImage,
          description:
            "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
        },
        {
          title: "Events",
          image: eventsImage,
          description:
            "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
        },
      ];
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={dataOfCard.image} alt="TODO: TITLE" />
          <h2>TODO: {dataOfCard.title}</h2>
          <p>TODO: {dataOfCard.description}</p>
        </li>
      </ul>
    </div>
  );
}
export default Card;