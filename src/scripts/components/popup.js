//import {buttonOpenAddCardForm} from '../utils/constants.js';
export default class Popup {
  constructor(popup){
    this._popup = popup;
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => {
        this.closePopup();
    });

    this._popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || 
        evt.target.classList.contains('popup__close')) {
            this.closePopup(this._popup)
        }
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