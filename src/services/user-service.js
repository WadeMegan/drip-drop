import config from '../config'

const UserService = {
  saveUserToken(userId) {
    window.sessionStorage.setItem(config.USER_KEY, userId)
  },
  getUserToken() {
    return window.sessionStorage.getItem(config.USER_KEY)
  },
  clearUserToken() {
    window.sessionStorage.removeItem(config.USER_KEY)
  },
}

export default UserService