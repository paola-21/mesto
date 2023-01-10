const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup_type_edit');
const closeButton = popup.querySelector('.popup__close_type_edit');

const formElement = document.querySelector('.form_type_edit');
const nameInput = formElement.querySelector('.form__input_text_header');
const jobInput = formElement.querySelector('.form__input_text_text');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__text');

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
const elementTemplate = document.querySelector('.template');

const addButton = document.querySelector('.add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const closePopup = popupNewCard.querySelector('.popup__close_type_new-card');


const formNewCard = document.querySelector('.form_type_new-card');
const elementText = document.querySelector('.element__text');
const elementFoto = document.querySelector('.element__foto');
const PopupImgclose = document.querySelector('.popup__close_type_img');


function createElement(item) {
  const element = elementTemplate.content.cloneNode(true);

  const elText = element.querySelector('.element__text').textContent = item.name;
  const elAlt = element.querySelector('.element__foto').alt = item.name;
  const elLink = element.querySelector('.element__foto').src = item.link;

  const likeButton = element.querySelector('.element__like');

  //кнопка лайка
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_aktive');
  });

  //удаление карточки
  const deleteButton = element.querySelector('.element__delete');
  deleteButton.addEventListener('click', function () {
    const deleteCard = deleteButton.closest('.element');
    deleteCard.remove();
  });

    //открытие попап картинки

  const elementFoto = element.querySelector('.element__foto');

  const PopupImg = document.querySelector('.popup_type_img');
  
  function openImg () {
    const popupImg = document.querySelector('.popup__img');
    const popupImgTitle = document.querySelector('.popup__img-title');
    popupImg.setAttribute('src', elLink);
    popupImgTitle.setAttribute('alt', elAlt);
    popupImgTitle.textContent = elText;
    PopupImg.classList.add('popup_opened');
  }
  
  elementFoto.addEventListener('click', openImg);

  function closePopupImg() {
    PopupImg.classList.remove('popup_opened');  
  }

  PopupImgclose.addEventListener ('click', closePopupImg);
   
  return element;
}


function renderElement() {
  initialCards.forEach(item => {
    const elementHtml = createElement(item);
    elementContainer.append(elementHtml);
  });
}


renderElement();


//открытие попапа 
function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}

//закрытие попапа
function closePopapNewCard() {
  popupNewCard.classList.remove('popup_opened');
}

addButton.addEventListener ('click', openPopupNewCard);
closePopup.addEventListener ('click', closePopapNewCard);

//фунция добавления карточки
function submitCard (evt) {
  evt.preventDefault();
  const cardName = document.querySelector('.form__input_text_name').value;
  const imageLink = document.querySelector('.form__input_text_link').value;

  let elementHtml = createElement({name: cardName, link: imageLink});
    elementContainer.prepend(elementHtml);

  closePopapNewCard();
}

formNewCard.addEventListener('submit', submitCard);