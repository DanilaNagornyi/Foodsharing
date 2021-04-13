import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './styleFormModal.css'

const MODAL_STYLES = {
  position: 'fixed',
  width: "35%",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const BUTTON_CLOUSE_STYLES = {
  position: 'fixed',
  top: 0,
  right: 0,
  border: 'none',
  zIndex: 1001,
  backgroundColor: 'rgba(0, 0, 0, .0)',

}


function EditUserModal({ open, children, onClose, user, setProfile }) {
  console.log('user', user);
  const history = useHistory()

  const [inputs, setInputs] = useState({ name: user?.name, surname: user?.surname, phone: user?.phone, city: user?.city, telegram: user?.telegram })

 const handlerStateInput = () => {

   setInputs({ name: user.name, surname: user.surname, phone: user.phone, city: user.city, telegram: user.telegram })
 }

 
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
    await setProfile(prev => {
      let user = { ...prev.user, name: inputs.name, surname: inputs.surname, phone: inputs.phone, city: inputs.city, telegram: inputs.telegram }
      return { ...prev, user }
    })
    await history.push('/profile')
  }
  
  if (!open) return null
  console.log('inputs------->', inputs);
  return ReactDom.createPortal (
  <>
  <div className="main-div main-w3layouts wrapper" style={OVERLAY_STYLES} />
    <div className="two-div main-agileinfo" style={MODAL_STYLES}>

    <div className="agileits-top formdesign">

      {children}
      <form className="" onSubmit={handleSubmit}>
            <button onClick={onClose} style={BUTTON_CLOUSE_STYLES} ><i class="bi bi-x"></i></button>
              <input className="text inputformdecor" type="text" name="name" placeholder="Имя" required="" value={inputs?.name} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="surname" placeholder="Фамилия" required="" value={inputs?.surname} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="phone" placeholder="Телефон" required="" value={inputs?.phone} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="telegram" placeholder="Telegram user name @" required="" value={inputs?.telegram} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="city" placeholder="Город" required="" value={inputs?.city} onChange={handleChange} />
              <button onClick={handleSubmit} onClick={onClose} className="btnlogin"> Сохранить изменения</button>
            </form>
            <p>Вы передумали? <Link onClick={onClose} to="/profile"> Выйти</Link></p>
      <ul className="colorlib-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
    </div>
  </>,
  document.getElementById('portal')
    
  )
}

export default EditUserModal
