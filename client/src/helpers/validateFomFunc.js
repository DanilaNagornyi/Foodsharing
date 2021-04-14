function checkName(name) {
  const regexForName = /^[А-Яа-яЁё\s]+$/g
  return regexForName.test(name)
};

function checkSurname(surname) {
  const regexForSurname = /^[А-Яа-яЁё\s]+$/g
  return regexForSurname.test(surname)
};

function checkEmail(email) {
  const regexForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  return regexForEmail.test(email)
};

function checkPhone(phone) {
  const regexForPhone = /^[0-9]+$/
  return regexForPhone.test(phone)

};

function checkCity(city) {
  const regexForCity = /^[А-Яа-яЁё\s]+$/g
  return regexForCity.test(city)
};

function checkTelegram(telegram) {
  const regexForTelegram = /^[a-zA-Z\s]+$/g
  return regexForTelegram.test(telegram)
};

function checkPassword(password) {
  const regexForPassword = /[1-9]{8,}/g
  return regexForPassword.test(password)
};

function checkConfirmPassword(confirmPassword) {
  const regexForConfirmPassword = /[1-9]{8,}/g
  return regexForConfirmPassword.test(confirmPassword)
};

export {
  checkName,
  checkSurname,
  checkEmail,
  checkPhone,
  checkCity,
  checkTelegram,
  checkPassword,
  checkConfirmPassword,
}