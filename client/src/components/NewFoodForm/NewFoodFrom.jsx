import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFood } from '../../redux/AC/foodAC'

function NewFoodFrom() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ category: '', name: '', description: '', photo: '', geolocation: '', quantity: '' })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addFood(inputs))
    setInputs({ category: '', name: '', description: '', photo: '', geolocation: '', quantity: '' })
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="category" value={inputs.category} onChange={handleChange} />
        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
        <input type="text" name="description" value={inputs.description} onChange={handleChange} />
        <input type="text" name="photo" value={inputs.photo} onChange={handleChange} />
        <input type="text" name="geolocation" value={inputs.geolocation} onChange={handleChange} />
        <input type="number" name="quantity" value={inputs.quantity} onChange={handleChange} />
      </form>
    </div>
  )
}

export default NewFoodFrom
