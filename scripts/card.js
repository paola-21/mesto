class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  //клонируем темплейт
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
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
      this._handleOpenPopup();
    });
  }

  // лайк карточки
  _likeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_aktive');
  }
  //удаление карточки
  _deleteButton() {
    const cardDelete = this._element.querySelector('.element__delete').closest('.element');
    cardDelete.remove();
  }

  //открытие попапа
  _handleOpenPopup() {
    document.querySelector('.popup__img').src = this._link;
    document.querySelector('.popup__img-title').textContent = this._name;
    document.querySelector('.popup__img-title').alt = this._name;
    document.querySelector('.popup_type_img').classList.add('popup_opened');
  }

    //метод подготовки к публикации
  generateCard () {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__foto').src = this._link;
    this._element.querySelector('.element__foto').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;

    return this._element;
  }
}

export default Card;
