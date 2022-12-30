const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup_type_edit');
const closeButton = popup.querySelector('.popup__close_type_edit');

let formElement = document.querySelector('.form_type_edit');
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


  const deleteCard = () => {
    element.remove();
  }

  const deleteButton = element.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteCard);

  return element;
}

function renderElement() {
  initialCards.forEach(item => {
    const elementHtml = createElement(item);
    elementContainer.append(elementHtml);
  });
}

renderElement();

const addButton = document.querySelector('.add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const closePopup = popupNewCard.querySelector('.popup__close_type_new-card');


let formNewCard = document.querySelector('.form_type_new-card');
let elementText = document.querySelector('.element__text');
let elementFoto = document.querySelector('.element__foto');

function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}

function closePopapNewCard() {
  popupNewCard.classList.remove('popup_opened');
}

addButton.addEventListener ('click', openPopupNewCard);
closePopup.addEventListener ('click', closePopapNewCard);


function addNewCard(cardName, imageLink) {
  const elementHtml = createElement({name: cardName, link: imageLink});
  elementContainer.prepend(elementHtml);
}


function submitCard (evt) {
  const cardName = evt.target[0].value;
  const imageLink = evt.target[1].value;
  evt.preventDefault();
  addNewCard(cardName, imageLink);
  closePopapNewCard();

}

formNewCard.addEventListener('submit', submitCard);