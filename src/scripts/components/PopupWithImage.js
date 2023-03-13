import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._link = this._popup.querySelector('.popup__img');
    this._name = this._popup.querySelector('.popup__img-title');
  }

  openPopup(data) {
    this._link.src = data.link;
    this._name.textContent = data.foto;
    this._name.alt = data.foto;
    super.openPopup();
  }
}