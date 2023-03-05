import {buttonOpenAddCardForm} from '../utils/constants.js';
export default class Popup {
  constructor(popup){
    this._popup = popup;
  }

  setEventListeners() {
    buttonOpenAddCardForm.addEventListener('click', () => {
        this.openPopup();
    });

    this._popup.querySelector('.popup__close').addEventListener('click', () => {
        this.closePopup();
    });
  }


  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = this._popup.querySelector('popup_opened')
        this.closePopup(openedPopup);
      }
  }


  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }




}