class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }
    
 // класс с ошибкой
 _showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._config.errorClass);
  }

  //удаляет класс с ошибкой
  _hideInputError(inputElement) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._config.inputErrorClass);
  errorElement.classList.remove(this._config.errorClass);
  errorElement.textContent = '';
  }
  
  //проверка валидности поля
  _isValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);//показывам ошибку
    } else {
      this._hideInputError(inputElement);//скрываем ошибку
    }
  }
  
    //проверяет валидность всех полей
  _hasInvalidInput = (inputList) => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  //отключает и включает кнопку
  _toggleButtonState = (inputList) => {
    if (this._hasInvalidInput(this._inputList)) {
      this._disabledButton();
  } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
  }
  }

  //добавляет обработчики
  _setEventListeners(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
    });
  });
  }

  _disabledButton() {
  this._buttonElement.classList.add(this._config.inactiveButtonClass);
  this._buttonElement.setAttribute('disabled', 'disabled');
  }

  clearValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  //перебирает все формы
  enableValidation() {
    this._setEventListeners();
  }

}

export default FormValidator;
