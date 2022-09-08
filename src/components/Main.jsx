import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";
import "../index";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([data, initialCards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Аватар"
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__name">{userName ?? "Chornaya Kseniya"} </h1>
            <button
              className="profile__edit-button"
              type="button"
              data-popup="edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription ?? "Traveler"}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          data-popup="add"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            title={card.name}
            image={card.link}
            likesCount={card.likes.length}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </>
  );
}

export default Main;
