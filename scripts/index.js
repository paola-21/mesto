import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './constants.js';

const buttonOpenEditProfileForm = document.querySelector('.edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = document.querySelector('.form_type_edit');
const nameInput = formEditProfile.querySelector('.form__input_text_header');
const jobInput = formEditProfile.querySelector('.form__input_text_text');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__text');
const popups = document.querySelectorAll('.popup');
const elementContainer = document.querySelector ('.elements');
const elementTemplate = document.querySelector('.template');
const buttonOpenAddCardForm = document.querySelector('.add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const formNewCard = document.querySelector('.form_type_new-card');
const elementText = document.querySelector('.element__text');
const elementFoto = document.querySelector('.element__foto'); 
const popupImg = document.querySelector('.popup_type_img');
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const cardName = document.querySelector('.form__input_text_name');
const imageLink = document.querySelector('.form__input_text_link');

const validation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__input-button',
  inactiveButtonClass: 'form__input-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

//шаблонная функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

//шаблонная функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//функция закрытия попапа через оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
          closePopup(popup)
      }
  })
})

//закрытие попапа через ескейп
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

//открытие попапа для редактирования профиля
buttonOpenEditProfileForm.addEventListener ('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validatorEditProfile.clearValidation();
});


//закрытие попапа редактирования
function submitEditProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

//добавление карточки
const renderInitialCards = (array) => {
  array.forEach((item) => {
    addCard(item.name, item.link);
  })
}

function createCard(name, link) {
  const card = new Card(name, link, '.template');
  const cardElement = card.generateCard();
  return cardElement;
}

const addCard = (title, image) => {
  const card = createCard(title, image);
  elementContainer.prepend(card);
};

//добавление карточки

formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(cardName.value, imageLink.value);
  closePopup(popupNewCard);
  formNewCard.reset();
  validatorNewCard.clearValidation();
});

renderInitialCards(initialCards);

buttonOpenAddCardForm.addEventListener ('click', () => {
  openPopup(popupNewCard);
});

//валидация формы
const validatorNewCard = new FormValidator(validation, formNewCard);
validatorNewCard.enableValidation();
validatorNewCard.clearValidation();

const validatorEditProfile = new FormValidator(validation, formEditProfile);
validatorEditProfile.enableValidation();
validatorEditProfile.clearValidation();

export {popupImgLink, popupImgTitle, openPopup, popupImg};

