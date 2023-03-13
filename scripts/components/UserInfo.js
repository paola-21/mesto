export default class UserInfo {
  constructor ({profileName, profileDescription}) {
    this._nameInput = document.querySelector(profileName);
    this._jobInput = document.querySelector(profileDescription);
  }


  //возврашает объект с данными пользователя
  getUserInfo () {
    return {
      name : this._nameInput.textContent,
      description : this._jobInput.textContent
    }
  }
 //принимает новые данные пользователя и добавляет их на
  setUserInfo({name, description}) {
    this._nameInput.textContent = name;
    this._jobInput.textContent = description;
  }
}