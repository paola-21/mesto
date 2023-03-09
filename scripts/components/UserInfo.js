export default class UserInfo {
  constructor ({profileName, profileDescription}) {
    this._nameInput = document.querySelector(profileName);
    this._jobInput = document.querySelector(profileDescription);
  }

  getUserInfo () {
    return {
      name : this._nameInput.textContent,
      description : this._jobInput.textContent
    }
  }

  setUserInfo ({name, description}) {
    this._nameInput.textContent = name;
    this._jobInput.textContent = description;
  }
}