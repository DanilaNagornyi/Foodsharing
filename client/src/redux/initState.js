const initState = () => {
  const defaultState = {
    user: {
      name: '',
      isAuth: false,
    },
    food: [],
    foodLength: [],
    subscribe: [],
    loading: false,
    isLoaded: false,
    error: ''
  }

  const fromLS = JSON.parse(window.localStorage.getItem('redux')) 

  return fromLS ? fromLS : defaultState
}

export default initState
