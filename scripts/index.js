const editButton = document.querySelector('.editButton');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.popup__input-header');
let jobInput = formElement.querySelector('.popup__input-text');
let profileName = document.querySelector('.profile__header');
let profileJob = document.querySelector('.profile__text');

editButton.addEventListener ('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})

function Close() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener ('click', Close)

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  Close();
}

formElement.addEventListener('submit', handleFormSubmit);

