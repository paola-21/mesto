//import {openPopup} from '../index.js';
//import {popupImgLink, popupImgTitle, popupImg} from '../utils/constants.js';
//import PopupWithImage from './PopupWithImage.js';

class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  //клонируем темплейт
  _getTemplate() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  //слушатели
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._likeButton();
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteButton();
    });

    this._element.querySelector('.element__foto').addEventListener('click', () => {
      this._popupWithImage();
    });
  }
  //открытие попапа
  _popupWithImage() {
    this._handleCardClick(this._name, this._link);
  }
    // popupImgLink.src = this._link;
    // popupImgTitle.textContent = this._name;
    // popupImgTitle.alt = this._name;
    // openPopup(popupImg);
  


  // лайк карточки
  _likeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_aktive');
  }
  //удаление карточки
  _deleteButton() {
    const cardDelete = this._element.querySelector('.element__delete').closest('.element');
    cardDelete.remove();
  }

  //метод подготовки к публикации
    generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__foto').src = this._link;
    this._element.querySelector('.element__foto').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;

    return this._element;
  }
}

export default Card;
