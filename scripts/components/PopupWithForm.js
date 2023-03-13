import Popup from "./popup.js";

 export default class PopupWithForm extends Popup {
    constructor (popup, handleSubmitForm) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.form');
    }

    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues())}
      );
    }

    //собирает данные всех полей формы
    _getInputValues () {
      this._data = {};
      this._inputs = this._form.querySelectorAll('.form__input');
      this._inputs.forEach((input) => {
        this._data[input.name] = input.value;
      });
      return this._data;
    }
    //сбрасывание формы
    closePopup() {
      super.closePopup();
      this._form.reset();
    }
} 

