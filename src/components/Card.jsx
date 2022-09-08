import React from "react";
import "../index";

const Card = ({ image, myId, title, likesCount, onCardClick, card }) => {
  return (
    <div className="card" key={myId}>
      <img
        src={image}
        alt={title}
        className="card__image"
        data-popup="image"
        onClick={() => onCardClick(card)}
      />
      <button className="card__trash" type="button"></button>
      <div className="card__describe">
        <h2 className="card__title">{title}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button" />
          <p className="card__like-counter">{likesCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
