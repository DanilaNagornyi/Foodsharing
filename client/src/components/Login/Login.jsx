import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logUser } from '../../redux/AC/userAC'


function Login() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logUser(inputs))
    setInputs({ name: '', surname: '', email: '', password: '', phone: '', city: '', telegram: '' })
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" onChange={handleChange} value={inputs.email} placeholder="email" name="email" />
          <input type="password" onChange={handleChange} value={inputs.password} placeholder="password" name="password" />
          <button>LOgin</button>
        </form>
      </div>
    </div>
  )
}

export default Login
