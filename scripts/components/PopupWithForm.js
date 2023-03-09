import Popup from "./popup.js";

 export default class PopupWithForm extends Popup {
    constructor (popup, {submitForm}) {
    super(popup);
    //this._popup = popup;
    this._submitForm = submitForm;
    this._form = document.querySelector('.form_type_new-card');
    }

    _getInputValues () {
      const data = {};
      this._inputs = this._popup.querySelectorAll('.form__input');
      this._inputs.forEach((input) => {
        data[input.name] = input.value;
      });

      return data;
    }

    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => { 
        evt.preventDefault();
        this._submitForm(this._getInputValues ());
        this._closePopup();
    });
    }

    closePopup() {
      super.closePopup();
      this._form.reset();
    }
    



} 

