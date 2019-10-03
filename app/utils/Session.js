import { AsyncStorage } from 'react-native'
const UserKey = 'user'
const TokenKey = 'token'
const CourseKey = 'courses'
const Session = {

  currentUser: async () => {
    let user = await Session.getData(UserKey)
    if (user) {
      user = JSON.parse(user)
    }
    return user
  },

  saveUser: async (user) => {
    await Session.setData(UserKey, JSON.stringify(user))
  },

  saveCourse: (courses) => {
    Session.setData(CourseKey, courses)
  },

  saveToken: async (token) => {
    await Session.setData(TokenKey, token)
  },

  // getToken: async () => {
  //   let token = await Session.getData(TokenKey)
  //   if (token) {
  //     token = JSON.parse(token)
  //   }
  //   return token
  // },
  logout: async () => {
    await Session.setData(UserKey)
    await Session.setData(TokenKey)
  },

  setData: async (key, data) => {
    try {
      if (data) {
        await AsyncStorage.setItem(key, data)
      } else {
        await AsyncStorage.removeItem(key)
      }
    } catch (exception) {
      return console.log(exception)
    }
  },

  getData: async (key) => {
    const data = await AsyncStorage.getItem(key)
    return data
  }

}

export default Session
