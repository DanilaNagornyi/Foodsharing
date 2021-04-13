import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const EditFoodForm = ({ food }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ name: food.name, description: food.description, validUntil: food.validUntil, geolocation: food.geolocation, quantity: food.quantity, city: food.city })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  console.log(inputs);
  const handleSubmit = (e) => {
    e.preventDefault()
    let { name, description, quantity, validUntil, geolocation, city } = inputs
    geolocation = `${geolocation}, ${city}`
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${geolocation}`)
      .then(res => res.json())
      .then(res => {
        let coordinate = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        return coordinate
      })
      .then(coordinate => fetch('http://localhost:3001/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ name, description, quantity, validUntil, geolocation, coordinate })
      }))
      .then(response => response.status)
    ///Допилить логику!!!
  }

  // history.push('/')
  return (
    <>
      <main id="main"></main>
      {/* <!-- main --> */}
      <div className="main-w3layouts wrapper maindiv">
        <h1>Изменение продукта</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit} >
              <input className="text inputformdecor" type="text" name="name" placeholder="Название" required="" value={inputs.name} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="description" placeholder="Описание" required="" value={inputs.description} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="geolocation" placeholder="Город" required="" value={inputs.geolocation} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="city" placeholder="Адрес" required="" value={inputs.city} onChange={handleChange} />
              <input className="text email inputformdecor" type="text" name="quantity" placeholder="Количество" required="" value={inputs.quantity} onChange={handleChange} />
              <input className="text email inputformdecor" type="date" name="validUntil" placeholder="Действительно до" required="" value={inputs.validUntil} onChange={handleChange} />
              <div className="wthree-text">
                <div className="clear"> </div>
              </div>
              <button className="btnlogin">Сохранить данные</button>

            </form>
            <p>Вы передумали? <Link to="/profile"> Выйти</Link></p>
          </div>
        </div>
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
      {/* <!-- //main --> */}
    </>
  );

}
export default EditFoodForm

