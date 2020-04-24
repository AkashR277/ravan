import React from "react";
import "./single-card.style.css";

export const SingleCard = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=2&size=180x180`}
        alt="monster"
      />
      <h1 key={props.monster.id}>{props.monster.name}</h1>
    </div>
  );
};
