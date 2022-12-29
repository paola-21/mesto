const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_text_header');
let jobInput = formElement.querySelector('.form__input_text_text');
let profileName = document.querySelector('.profile__header');
let profileJob = document.querySelector('.profile__text');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function close() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  close();
}

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener ('click', openPopup);

closeButton.addEventListener ('click', close);


const initialCards = [
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

const elementContainer = document.querySelector ('.elements');
const elementTemplate = document.querySelector('.template').content.querySelector('.element');

function createElement(item) {
  const element = elementTemplate.cloneNode(true);

  element.querySelector('.element__text').textContent = item.name;
  element.querySelector('.element__foto').src = item.link;
  element.querySelector('.element__foto').alt = item.link;

  return element;
}

function renderElement() {
  initialCards.forEach(item => {
    const elementHtml = createElement(item);
    elementContainer.append(elementHtml);
  });
}

renderElement();