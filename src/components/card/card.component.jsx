import React from "react";
import { SingleCard } from "../single-card/single-card.component";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card">
      {props.monsters.map(monster => (
        <SingleCard monster={monster}></SingleCard>
      ))}
    </div>
  );
};
