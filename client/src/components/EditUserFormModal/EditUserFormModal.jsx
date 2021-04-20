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


function EditUserModal({ user, open, children, onClose, setProfile }) {
  const history = useHistory()


  const [inputs, setInputs] = useState({ name: user.name, surname: user.surname, phone: user.phone, city: user.city, })


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let resp = await fetch("https://fruitoninja.herokuapp.com/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputs)
    })
    if (resp.status === 200)
      await setProfile(prev => {
        let user = { ...prev.user, name: inputs.name, surname: inputs.surname, phone: inputs.phone, city: inputs.city}
        return { ...prev, user }
      })
    await onClose()
  }

  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className="main-div main-w3layouts wrapper" style={OVERLAY_STYLES} />
      <div className="two-div main-agileinfo" style={MODAL_STYLES}>

        <div className="agileits-top formdesign">

          {children}
          <form className="" onSubmit={handleSubmit}>
            <button onClick={onClose} style={BUTTON_CLOUSE_STYLES} ><i className="bi bi-x"></i></button>
            <input className="text inputformdecor" type="text" name="name" placeholder="Имя" required="" value={inputs?.name} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="surname" placeholder="Фамилия" required="" value={inputs?.surname} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="phone" placeholder="Телефон" required="" value={inputs?.phone} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="city" placeholder="Город" required="" value={inputs?.city} onChange={handleChange} />
            <button onClick={handleSubmit} className="btnlogin"> Сохранить изменения</button>
          </form>
          <p>Вы передумали? <Link onClick={onClose} to="/profile"> Выйти</Link></p>
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
      </div>
    </>,
    document.getElementById('portal')

  )
}

export default EditUserModal
