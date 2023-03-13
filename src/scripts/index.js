import Card from './components/card.js';
import FormValidator from './components/FormValidator.js';
import {initialCards, nameInput, jobInput, profileName, profileJob,
  formEditProfile, popupEditProfile, buttonOpenEditProfileForm,
  popups, elementContainer, buttonOpenAddCardForm, popupNewCard, 
  formNewCard, cardName, imageLink, popupImg
} from './utils/constants.js';
import Section from './components/Section.js';
import Popup from './components/popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const validation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__input-button',
  inactiveButtonClass: 'form__input-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

const createCard = (data) => {
  const card = new Card(({
    data: data,
    handleCardClick: (foto, link) => {
      popupImage.openPopup({foto, link});
    }
  }),'.template');
  const cardElement = card.generateCard();
  return cardElement;
}

const CardList = new Section({
  items: initialCards,
  renderer: (data) => {
    CardList.addItem(createCard(data));
  }
},
'.elements');

CardList.renderItems();

//открытие картики на весь экран
const popupImage = new PopupWithImage(popupImg);
 popupImage.setEventListeners();

buttonOpenAddCardForm.addEventListener('click', () => {
  popupNewImage.openPopup();
});

const popupNewImage = new PopupWithForm(popupNewCard, handleformNewCard);

popupNewImage.setEventListeners();


function handleformNewCard (data) {
    const NewCard = createCard(data);
    CardList.addItem(NewCard);
    popupNewImage.closePopup();
    
}

//константа с данными профиля
const formUser = new UserInfo ({
  profileName: '.profile__header', 
  profileDescription: '.profile__text'
});

buttonOpenEditProfileForm.addEventListener('click', () => {
  profilePopupEdit.openPopup();
  const userInfo = formUser.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.description;
});

  //попап редактирования профиля

  function handleformProfile (data) {
    formUser.setUserInfo (data);
    profilePopupEdit.closePopup();
  }

  const profilePopupEdit = new PopupWithForm (popupEditProfile, handleformProfile); 

 profilePopupEdit.setEventListeners();
 
//валидация формы
const validatorNewCard = new FormValidator(validation, formNewCard);
validatorNewCard.enableValidation();
validatorNewCard.clearValidation();

const validatorEditProfile = new FormValidator(validation, formEditProfile);
validatorEditProfile.enableValidation();
validatorEditProfile.clearValidation();

