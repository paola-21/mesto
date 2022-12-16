const editButton = document.querySelector('.editButton');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form_input_header');
let jobInput = formElement.querySelector('.popup__form_input_text');
let profileName = document.querySelector('.profile__header');
let profileJob = document.querySelector('.profile__text');

editButton.addEventListener ('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})

closeButton.addEventListener ('click', Close)


function Close() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  Close();
}

formElement.addEventListener('submit', handleFormSubmit);

