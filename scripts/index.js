import Card from './components/card.js';
import FormValidator from './components/FormValidator.js';
import {initialCards, nameInput, jobInput, profileName, profileJob,
  formEditProfile, popupEditProfile, buttonOpenEditProfileForm,
  popups, elementContainer, buttonOpenAddCardForm, popupNewCard, 
  formNewCard, cardName, imageLink, 
} from './utils/constants.js';
import Section from './components/Section.js';
import Popup from './components/popup.js';

const validation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__input-button',
  inactiveButtonClass: 'form__input-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

const popupOpenClose = new Popup(popupNewCard);
popupOpenClose.setEventListeners();

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

const CardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
   
    CardList.addItem(cardElement);
    //CardList.addItem(cardName.value, imageLink.value);
  }
},
'.elements');

CardList.renderItems();
CardList.addItem(cardName.value, imageLink.value);

//валидация формы
const validatorNewCard = new FormValidator(validation, formNewCard);
validatorNewCard.enableValidation();
validatorNewCard.clearValidation();

const validatorEditProfile = new FormValidator(validation, formEditProfile);
validatorEditProfile.enableValidation();
validatorEditProfile.clearValidation();


