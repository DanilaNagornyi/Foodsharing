import { AUTH, LOGOUT } from "../types/userTypes"

function userReducer(state = {}, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, user: { name: action.payload, isAuth: true } }
    case LOGOUT:
      return { ...state, user: { name: '', isAuth: false } }
    default:
      return state
  }

}


export default userReducer
