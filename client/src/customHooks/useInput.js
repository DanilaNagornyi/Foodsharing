import { useState } from "react";

function useInputs({
  initValue = '',
  placeholder = '',
  type = '',
  name = '',
  validateFunc,
  emptyRequired = false,
}) {

  const [value, setValue] = useState(initValue);

  const [error, setError] = useState(false)

  const errorMessages = {
    empty: '* поле не может быть пустым',
    wrong: '* неверный формат данных',
  }

  const required = emptyRequired;

  const changeHandler = (event) => {
    setValue(event.target.value)
  };

  const clearHandler = () => {
    setValue('')
  };

  const validate = () => {
    if (required && !value) {
      setError(errorMessages.empty)
      return false
    }
    if (!required && typeof validateFunc === 'function') {
      const isValid = validateFunc(value)
      if (isValid) {
        setError(false)
        return true
      }
      setError(errorMessages.wrong)
      return false
    }
    setError(false)
    return true
  };

  const blurHandler = () => {
    validate()
  }

  return {
    forTag: {
      placeholder,
      onChange: changeHandler,
      value,
      type,
      name,
      onBlur: blurHandler,
    },
    clear: clearHandler,
    isValid: validate,
    error,
  }
}

export default useInputs