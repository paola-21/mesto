export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const buttonOpenEditProfileForm = document.querySelector('.edit-button');
export const popupEditProfile = document.querySelector('.popup_type_edit');
export const formEditProfile = document.querySelector('.form_type_edit');
export const nameInput = formEditProfile.querySelector('.form__input_text_header');
export const jobInput = formEditProfile.querySelector('.form__input_text_text');
export const profileName = document.querySelector('.profile__header');
export const profileJob = document.querySelector('.profile__text');
export const popups = document.querySelectorAll('.popup');
export const elementContainer = document.querySelector ('.elements');
//const elementTemplate = document.querySelector('.template');
export const buttonOpenAddCardForm = document.querySelector('.add-button');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const formNewCard = document.querySelector('.form_type_new-card');
//const elementText = document.querySelector('.element__text');
//const elementFoto = document.querySelector('.element__foto'); 
export const popupImg = document.querySelector('.popup_type_img');
export const popupImgLink = document.querySelector('.popup__img');
export const popupImgTitle = document.querySelector('.popup__img-title');
export const cardName = document.querySelector('.form__input_text_name');
export const imageLink = document.querySelector('.form__input_text_link');