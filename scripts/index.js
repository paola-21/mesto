const buttonOpenEditProfileForm = document.querySelector('.edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonCloseEditProfileForm = popupEditProfile.querySelector('.popup__close_type_edit');

const formEditProfile = document.querySelector('.form_type_edit');
const nameInput = formEditProfile.querySelector('.form__input_text_header');
const jobInput = formEditProfile.querySelector('.form__input_text_text');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__text');

//шаблонная функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
}

buttonOpenEditProfileForm.addEventListener ('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//шаблонная функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//зактытие попапа оверлей
popupEditProfile.addEventListener ('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupEditProfile);
  }
});

//закрытие попапа ескейп
document.addEventListener ('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(popupNewCard);
    closePopup(popupEditProfile);
    closePopup(popupImg);
  }
})

buttonCloseEditProfileForm.addEventListener ('click', () => {
  closePopup(popupEditProfile)
});

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
const buttonCloseNewCard = popupNewCard.querySelector('.popup__close_type_new-card');

const formNewCard = document.querySelector('.form_type_new-card');
const elementText = document.querySelector('.element__text');
const buttonClosePopupImage = document.querySelector('.popup__close_type_img');
const popupImg = document.querySelector('.popup_type_img');
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const cardName = document.querySelector('.form__input_text_name');
const imageLink = document.querySelector('.form__input_text_link');



function createElement(item) {
  const element = elementTemplate.content.cloneNode(true);
  const elementFoto = element.querySelector('.element__foto');

  element.querySelector('.element__text').textContent = item.name;
  elementFoto.alt = item.name;
  elementFoto.src = item.link;

  const buttonLike = element.querySelector('.element__like');

  //кнопка лайка
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_aktive');
  });

  //удаление карточки
  const buttonDelete = element.querySelector('.element__delete');
  buttonDelete.addEventListener('click', function () {
    const cardDelete = buttonDelete.closest('.element');
    cardDelete.remove();
  });

  //открытие попап картинки

  elementFoto.addEventListener('click', () => {
    openPopup(popupImg);
    popupImgLink.setAttribute('src', item.link);
    popupImgTitle.setAttribute('alt', item.name);
    popupImgTitle.textContent =  item.name;
  });
  
  return element;
}

function renderInitialCards() {
  initialCards.forEach(item => {
    const card = createElement(item);
    elementContainer.append(card);
  });
}

renderInitialCards();

buttonOpenAddCardForm.addEventListener ('click', () => {
  openPopup(popupNewCard)
});

buttonCloseNewCard.addEventListener ('click', () => {
  closePopup(popupNewCard)
});

buttonClosePopupImage.addEventListener ('click', () => {
  closePopup(popupImg)
});

popupNewCard.addEventListener ('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupNewCard);
  }
});

popupImg.addEventListener ('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popupImg);
  }
});


//фунция добавления карточки
function submitCard (evt) {
  evt.preventDefault();

  const card = createElement({name: cardName.value, link: imageLink.value});
    elementContainer.prepend(card);

  evt.target.reset();

  closePopup(popupNewCard); 
}

formNewCard.addEventListener('submit', submitCard);


//валидация формы
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'кнопка отключена');
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

