import "../index";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  function handleCardClick(obj) {
    setIsImageOpen(true);
    setSelectedCard(obj);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithImage
          onClose={closeAllPopups}
          card={selectedCard}
          isImageOpen={isImageOpen}
        />
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"profile"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            required
            placeholder="Имя"
            id="name"
            type="text"
            className="popup__input popup__input_field_name"
            name="nameInput"
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error" id="name-error"></span>
          <input
            required
            placeholder="Деятельность"
            id="job"
            type="text"
            className="popup__input popup__input_field_job"
            name="jobInput"
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error" id="job-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title={"Новое место"}
          name={"place"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Cоздать"
        >
          <input
            required
            placeholder="Название"
            id="place"
            type="text"
            className="popup__input popup__input_place_name"
            name="placeNameInput"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error" id="place-error"></span>
          <input
            required
            placeholder="Ссылка на картинку"
            id="link"
            type="url"
            className="popup__input popup__input_place_link"
            name="placeLinkInput"
            minLength="2"
          />
          <span className="popup__input-error" id="link-error"></span>
        </PopupWithForm>
        <PopupWithForm title={"Вы уверены?"} name={"confirmation"}  buttonText="Да">
        </PopupWithForm>
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            required
            placeholder="Ссылка на новый аватар"
            id="avatarLink"
            type="url"
            className="popup__input popup__input_link_avatar"
            name="linkInput"
            minLength="2"
          />
          <span className="popup__input-error" id="avatarLink-error"></span>
        </PopupWithForm>
      </div>
    </div>
  );
}
export default App;
