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