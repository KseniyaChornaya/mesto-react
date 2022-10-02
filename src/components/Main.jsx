import React, { useContext } from "react";
import Card from "./Card";
import "../index";
import CurrentUserContext  from "../context/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        />
        <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__wrap">
            <h1 className="profile__name">{currentUser.name ?? "Chornaya Kseniya"} </h1>
            <button
              className="profile__edit-button"
              type="button"
              data-popup="edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about ?? "Traveler"}</p>
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
            currentUser={currentUser}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </>
  );
}

export default Main;
