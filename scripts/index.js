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

// const popupOpenClose = new Popup(popupNewCard);
// popupOpenClose.setEventListeners();

const formUser = new UserInfo ({
  profileName: '.profile__header', 
  profileDescription: '.profile__text'
});

  //попап редактирования профиля
// const profilePopupEdit = new PopupWithForm (popupEditProfile, {
//   submitForm: (userData) => {
//     formUser.setUserInfo({
//     name : userData.name,
//     description : userData.description
//   });
//   profilePopupEdit.closePopup();
//   }
//   });

  const profilePopupEdit = new PopupWithForm (popupEditProfile, handleformProfile); 

  function handleformProfile (data) {
    profilePopupEdit.setUserInfo ({name: data.name, description: data.description});
  }

profilePopupEdit.setEventListeners();

buttonOpenEditProfileForm.addEventListener('click', () => {
  profilePopupEdit.openPopup();
  //validatorEditProfile.clearValidation();
  const userInfo = formUser.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.description;
});


// const profilePopupEdit = new PopupWithForm (popupEditProfile, {
//   submitForm: (userData) => {
//     formUser.setUserInfo({
//     name : userData.name,
//     description : userData.description
//   });
//   profilePopupEdit.closePopup();
//   }
//   });

//попап создания карточки
// const PopupForm = new PopupWithForm(popupNewCard);
// PopupForm.setEventListeners();

const popupImage = new PopupWithImage(popupImg);
 popupImage.setEventListeners();

const createCard = (data) => {
  const card = new Card(({
    data: data,
    handleCardClick: (name, link) => {
      popupImage.openPopup({name, link});
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

//валидация формы
const validatorNewCard = new FormValidator(validation, formNewCard);
validatorNewCard.enableValidation();
validatorNewCard.clearValidation();

const validatorEditProfile = new FormValidator(validation, formEditProfile);
validatorEditProfile.enableValidation();
validatorEditProfile.clearValidation();



//добавление массива карточек

// function createCard(name, link) {
//   const card = new Card(name, link, '.template');
//   return card.generateCard();
// }

// const addCard = (data) => {
//   const card = createCard(data);
//   elementContainer.prepend(card);
// };

// const renderInitialCards = (array) => {
//   array.forEach((data) => {
//     addCard(data.name, data.link);
//   })
// }
// renderInitialCards(initialCards);

// //добавление одной карточки
// //Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер. 
// function addNewCard (evt) {
//   evt.preventDefault();
//   addCard(cardName.value, imageLink.value);
//   closePopup(popupNewCard);
//   formNewCard.reset();
//   validatorNewCard.clearValidation();
// }

//  formNewCard.addEventListener('submit', addNewCard);



// buttonOpenAddCardForm.addEventListener ('click', () => {
//   openPopup(popupNewCard);
// });

// //шаблонная функция открытия попапа
// export function openPopup (popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// }

// //шаблонная функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// }

//функция закрытия попапа через оверлей
// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains('popup_opened') || 
//evt.target.classList.contains('popup__close')) {
//           closePopup(popup)
//       }
//   })
// })

//закрытие попапа через ескейп
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened')
//     closePopup(openedPopup);
//   }
// }

// //открытие попапа для редактирования профиля
// buttonOpenEditProfileForm.addEventListener ('click', () => {
//   openPopup(popupEditProfile);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   validatorEditProfile.clearValidation();
// });

// //закрытие попапа редактирования
// function submitEditProfileForm (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// }

//formEditProfile.addEventListener('submit', submitEditProfileForm);


