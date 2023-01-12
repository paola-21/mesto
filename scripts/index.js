const buttonEdit = document.querySelector('.edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonClose = popupEditProfile.querySelector('.popup__close_type_edit');

const formElement = document.querySelector('.form_type_edit');
const nameInput = formElement.querySelector('.form__input_text_header');
const jobInput = formElement.querySelector('.form__input_text_text');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__text');

//шаблонная функция открытия попапа
function openPopup (a) {
  a.classList.add('popup_opened');
}


buttonEdit.addEventListener ('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//шаблонная функция закрытия попапа
function closePopup(b) {
  b.classList.remove('popup_opened');
}

buttonClose.addEventListener ('click', () => {
  closePopup(popupEditProfile)
});

function submitHandleForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formElement.addEventListener('submit', submitHandleForm);

const elementContainer = document.querySelector ('.elements');
const elementTemplate = document.querySelector('.template');

const buttonAdd = document.querySelector('.add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const buttonCloseNewCard = popupNewCard.querySelector('.popup__close_type_new-card');

const formNewCard = document.querySelector('.form_type_new-card');
const elementText = document.querySelector('.element__text');
const elementFoto = document.querySelector('.element__foto');
const ButtonImgClose = document.querySelector('.popup__close_type_img');
const popupImg = document.querySelector('.popup_type_img');
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');


function createElement(item) {
  const element = elementTemplate.content.cloneNode(true);

  element.querySelector('.element__text').textContent = item.name;
  element.querySelector('.element__foto').alt = item.name;
  element.querySelector('.element__foto').src = item.link;

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

  const elementFoto = element.querySelector('.element__foto');

  elementFoto.addEventListener('click', () => {
    openPopup(popupImg);
    popupImgLink.setAttribute('src', item.link);
    popupImgTitle.setAttribute('alt', item.name);
    popupImgTitle.textContent =  item.name;
  });
  
  return element;
}


function renderElement() {
  initialCards.forEach(item => {
    const elementHtml = createElement(item);
    elementContainer.append(elementHtml);
  });
}

renderElement();

buttonAdd.addEventListener ('click', () => {
  openPopup(popupNewCard)
});

buttonCloseNewCard.addEventListener ('click', () => {
  closePopup(popupNewCard)
});

ButtonImgClose.addEventListener ('click', () => {
  closePopup(popupImg)
});

//фунция добавления карточки
function submitCard (evt) {
  evt.preventDefault();
  const cardName = document.querySelector('.form__input_text_name').value;
  const imageLink = document.querySelector('.form__input_text_link').value;

  const elementHtml = createElement({name: cardName, link: imageLink});
    elementContainer.prepend(elementHtml);

  evt.target.reset();

  closePopup(popupNewCard); 
}

formNewCard.addEventListener('submit', submitCard);