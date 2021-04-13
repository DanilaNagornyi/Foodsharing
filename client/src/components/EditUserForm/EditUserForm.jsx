import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './styleForm.css'

function EditUserForm({ user, setChange, setProfile }) {
  const history = useHistory()
  const [inputs, setInputs] = useState({ name: user.name, surname: user.surname, phone: user.phone, city: user.city, telegram: user.telegram })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let resp = await fetch("http://localhost:3001/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputs)
    })
    if (resp.status === 200)
      await setChange(prev => !prev)
    await setProfile(prev => {
      let user = { ...prev.user, name: inputs.name, surname: inputs.surname, phone: inputs.phone, city: inputs.city, telegram: inputs.telegram }
      return { ...prev, user }
    })
    await history.push('/profile')
  }
  return (
    <>
      <main id="main"></main>
      <div className="main-w3layouts wrapper maindiv">
        <h1>Изменение личных данных</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit}>
              <input className="text inputformdecor" type="text" name="name" placeholder="Имя" required="" value={inputs.name} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="surname" placeholder="Фамилия" required="" value={inputs.surname} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="phone" placeholder="Телефон" required="" value={inputs.phone} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="telegram" placeholder="Telegram user name @" required="" value={inputs.telegram} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="city" placeholder="Город" required="" value={inputs.city} onChange={handleChange} />
              <button className="btnlogin"> Сохранить изменения</button>
            </form>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li><img className="img-bubbles" src="../../../assets/img/eggplant.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/pineapple.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/strawberry.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/apple.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/bananas.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/bell-pepper.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/broccoli.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/carrot.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/fruit.svg"/></li>
          <li><img className="img-bubbles" src="../../../assets/img/faviconavocado.svg"/></li>
        </ul>
      </div>
      {/* <!-- //main --> */}
    </>
  )
}

export default EditUserForm
