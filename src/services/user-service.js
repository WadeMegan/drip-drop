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
      /* hasUserToken() {
        return !!TokenService.getAuthToken()
      } */ //take this one out if you dont use it
}

export default UserService