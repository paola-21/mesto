import Card from './card.js';
import FormValidator from './validate.js';
import {initialCards} from './constants.js';

const buttonOpenEditProfileForm = document.querySelector('.edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = document.querySelector('.form_type_edit');
const nameInput = formEditProfile.querySelector('.form__input_text_header');
const jobInput = formEditProfile.querySelector('.form__input_text_text');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__text');
const popups = document.querySelectorAll('.popup');


//шаблонная функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

buttonOpenEditProfileForm.addEventListener ('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//функция закрытия попапа через оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
})

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//закрытие попапа ескейп
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function submitEditProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

const elementContainer = document.querySelector ('.elements');
const elementTemplate = document.querySelector('.template');
const buttonOpenAddCardForm = document.querySelector('.add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const formNewCard = document.querySelector('.form_type_new-card');
const elementText = document.querySelector('.element__text');
const popupImg = document.querySelector('.popup_type_img');
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const cardName = document.querySelector('.form__input_text_name');
const imageLink = document.querySelector('.form__input_text_link');

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
});

renderInitialCards(initialCards);

buttonOpenAddCardForm.addEventListener ('click', () => {
  openPopup(popupNewCard);
});

const validation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__input-button',
  inactiveButtonClass: 'form__input-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

//валидация формы
const validatorNewCard = new FormValidator(validation, formNewCard);
validatorNewCard.enableValidation();

const validatorEditProfile = new FormValidator(validation, formEditProfile);
validatorEditProfile.enableValidation();