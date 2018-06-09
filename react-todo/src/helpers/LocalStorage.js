import Cookies from 'universal-cookie'

const cookies = new Cookies()

const availability = window.localStorage ? true : false

const LocalStorage =
{
  loadState: key => {
    try {
      const serializedState = localStorage.getItem(key)

      if (serializedState === null) return undefined

      return JSON.parse(serializedState)
    } catch (e) {
      console.log(e)

      if (!availability) alert('Your browser does not support Local Storage! But you got a cookie!')

      const serializedState = cookies.get(key)

      if (serializedState === null) return undefined

      return serializedState
    }
  },
  saveState: (key, persistedstate) => {
    try {
      const serializedState = JSON.stringify(persistedstate);

      localStorage.setItem(key, serializedState)
    } catch (e) {
      console.log(e)

      if (!availability) alert('Your browser does not support Local Storage! But you got a cookie!')

      const serializedState = JSON.stringify(persistedstate)

      cookies.set(key, serializedState, { path: '/' })
    }
  }
}

export default LocalStorage
