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
		setInputs({ email: '', password: '' })
	}
	return (
		<>
			<main id="main"></main>
			{/* <div>
        <form onSubmit={handleSubmit}>
          <input type="email" onChange={handleChange} value={inputs.email} placeholder="email" name="email" />
          <input type="password" onChange={handleChange} value={inputs.password} placeholder="password" name="password" />
          <button>LOgin</button>
        </form>
      </div> */}
			{/* <!-- main --> */}
			<div className="main-w3layouts wrapper maindiv">
				<h1>Авторизация</h1>
				<div className="main-agileinfo">
					<div className="agileits-top formdesign">
						<form className="" action="#" method="post">

							<input
								className="text email inputformdecor"
								type="email"
								name="email"
								placeholder="Email"
								required=""
								pattern="/^[A-Za-z0-9]+$/"
								title="Неверный формат"
							/>

							<input
								className="text email inputformdecor"
								type="password"
								name="password"
								placeholder="Пароль"
								required=""
								pattern="^[A-Za-zА-Яа-яЁё\s]{6,}"
								title="Формат ввода пароля"
							/>

							<div className="wthree-text">
								<label className="anim">
									<input type="checkbox" className="checkbox" required="" />
									<span className="textoncheckbox">Я согласен с условиями платформы!</span>
								</label>
								<div className="clear"> </div>
							</div>
							<button className="btnlogin">ЗАРЕГИСТРИРОВАТЬСЯ</button>
							<button className="btngoogle">ВОЙТИ ЧЕРЕЗ <img src="../../../assets/img/google-logo.png" width="27%"></img></button>

						</form>
						<p>У вас нет аккаунта? <a href="#"> Регистрация</a></p>
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
	)
}

export default Login
