import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { setError } from '../../redux/AC/errorAC'

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


const EditFoodFormModal = ({ open, children, onClose, food, setProfile }) => {
  const err = useSelector(state => state.error)
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ name: food?.name, description: food?.description, validUntil: food?.validUntil, geolocation: food?.geolocation, quantity: food?.quantity, photo: food?.photo })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    console.log(food._id, '<<<<<<<=');
    e.preventDefault()
    let { name, description, quantity, validUntil, geolocation, photo } = inputs
    geolocation = `${geolocation}`
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${geolocation}`)
      .then(res => res.json())
      .then(res => {
        let coordinate = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        return coordinate
      })
      .then(coordinate => fetch(`http://localhost:3001/products/${food._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ name, description, quantity, validUntil, geolocation, coordinate, photo })
      }))
      .then(response => {
        if (response.status === 200) {
          setProfile(prev => {
            let product = prev.product.map(el => el._id === food._id ? { ...el, name, description, quantity, validUntil, geolocation, photo } : el)
            return {
              ...prev, product
            }
          })
          onClose()
        } else { dispatch(setError('Не удалось сохранить изменения')) }
      })
    ///Допилить логику!!!
  }

  // history.push('/')
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <main id="main"></main>
      <div className="main-div main-w3layouts wrapper" style={OVERLAY_STYLES} />
      <div className="two-div main-agileinfo" style={MODAL_STYLES}>

        <div className="agileits-top formdesign">

          {children}
          <form className="" onSubmit={handleSubmit}>
            <button onClick={onClose} style={BUTTON_CLOUSE_STYLES} ><i class="bi bi-x"></i></button>
            {err}
            <input className="text inputformdecor" type="text" name="name" placeholder="Название" required="" value={inputs.name} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="description" placeholder="Описание" required="" value={inputs.description} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="geolocation" placeholder="Адрес" required="" value={inputs.geolocation} onChange={handleChange} />
            <input className="text email inputformdecor" type="text" name="quantity" placeholder="Количество" required="" value={inputs.quantity} onChange={handleChange} />
            <input className="text email inputformdecor" type="date" name="validUntil" placeholder="Действительно до" required="" value={inputs.validUntil} onChange={handleChange} />
            <button onClick={handleSubmit} className="btnlogin"> Сохранить изменения</button>
            <div className="wthree-text">
              <div className="clear"> </div>
            </div>
          </form>
          <p>Вы передумали? <Link onClick={onClose} to="/profile"> Выйти</Link></p>
          <div>
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
    </>,
    document.getElementById('portal')
  );

}
export default EditFoodFormModal

