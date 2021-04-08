import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { regUser } from '../../redux/AC/userAC'

function Registration() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ name: '', surname: '', email: '', password: '', phone: '', city: '', telegram: '' })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(regUser(inputs))
    setInputs({ name: '', surname: '', email: '', password: '', phone: '', city: '', telegram: '' })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputs.name} placeholder="name" name="name" />
        <input type="text" onChange={handleChange} value={inputs.surname} placeholder="surname" name="surname" />
        <input type="tel" onChange={handleChange} value={inputs.phone} placeholder="phone" name="phone" />
        <input type="email" onChange={handleChange} value={inputs.email} placeholder="email" name="email" />
        <input type="text" onChange={handleChange} value={inputs.telegram} placeholder="telegram" name="telegram" />
        <input type="text" onChange={handleChange} value={inputs.city} placeholder="city" name="city" />
        <input type="password" onChange={handleChange} value={inputs.password} placeholder="password" name="password" />
        <button>Зарегаться</button>
      </form>
    </div>
  )
}

export default Registration
