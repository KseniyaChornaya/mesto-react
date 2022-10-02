import PopupWithForm from "./PopupWithForm";
import { useRef, useState } from "react";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const [avatarValue, setAvatarValue] = useState("");
  const avatarInput = useRef();

  function handleChange(e) {
    setAvatarValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarValue);
  }

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={avatarInput}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="avatarLink-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
