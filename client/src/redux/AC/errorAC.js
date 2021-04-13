import { CLEAR_ERROR, SET_ERROR } from "../types/errorTypes"

export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}
