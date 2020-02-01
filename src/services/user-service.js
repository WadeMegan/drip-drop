import config from '../config'

const UserService = {
    saveUserToken(userId) {
        window.localStorage.setItem(config.USER_KEY, userId)
      },
      getUserToken() {
        return window.localStorage.getItem(config.USER_KEY)
      },
      clearUserToken() {
        window.localStorage.removeItem(config.USER_KEY)
      },
      /* hasUserToken() {
        return !!TokenService.getAuthToken()
      } */ //take this one out if you dont use it
}

export default UserService