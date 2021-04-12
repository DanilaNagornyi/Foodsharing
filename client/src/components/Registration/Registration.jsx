import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { regUser } from '../../redux/AC/userAC'
import './styleForm.css'


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
		<>
			<main id="main"></main>
			{/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputs.name} placeholder="name" name="name" />
        <input type="text" onChange={handleChange} value={inputs.surname} placeholder="surname" name="surname" />
        <input type="tel" onChange={handleChange} value={inputs.phone} placeholder="phone" name="phone" />
        <input type="email" onChange={handleChange} value={inputs.email} placeholder="email" name="email" />
        <input type="text" onChange={handleChange} value={inputs.telegram} placeholder="telegram" name="telegram" />
        <input type="text" onChange={handleChange} value={inputs.city} placeholder="city" name="city" />
        <input type="password" onChange={handleChange} value={inputs.password} placeholder="password" name="password" />
        <button>Зарегаться</button>
      </form> */}

			{/* <!-- main --> */}
			<div className="main-w3layouts wrapper maindiv">
				<h1>Регистрация</h1>
				<div className="main-agileinfo">
					<div className="agileits-top formdesign">
						<form className="" action="#" method="post">

							<input
								className="text inputformdecor"
								type="text"
								name="name"
								placeholder="Имя"
								required=""
								pattern="^[A-Za-zА-Яа-яЁё\s]{0,}+$"
								title="Используйте только буквы"
							/>

							<input
								className="text email inputformdecor"
								type="text"
								name="surname"
								placeholder="Фамилия"
								required=""
								pattern="^[A-Za-zА-Яа-яЁё\s]{0,}+$"
								title="Используйте только буквы"
							/>

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
								className="text email inputformdecor inputphoto input-file"
								id="file"
								type="file"
								name="photo"
								multiple accept="image/*"
								placeholder="Загрузить фото"
								required=""
							/>

							<label for="file" className="btn btn-tertiary js-labelFile">
								<i className="icon fa fa-check"></i>
								<span className="js-fileName"> Загрузить фото</span>
							</label>

							<input
								className="text email inputformdecor"
								type="text"
								name="phone"
								placeholder="Телефон"
								required=""
								pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
								title="Используйте формат: +7 (777) 777-77-77"
							/>

							<input
								className="text email inputformdecor"
								type="text"
								name="telegram"
								placeholder="Telegram user name @"
								required=""
								pattern="^[a-zA-Z\s]+$"
								title="Telegramm"
							/>

							<input
								className="text email inputformdecor"
								type="text"
								name="city"
								placeholder="Город"
								required=""
								pattern="^[A-Za-zА-Яа-яЁё\s]{0,}"
								title="Название города"
							/>

							<input
								className="text inputformdecor"
								type="password"
								name="password"
								placeholder="Пароль"
								required=""
								pattern="^[A-Za-zА-Яа-яЁё\s]{6,}"
							/>

							<input
								className="text w3lpass inputformdecor"
								type="password"
								name="password"
								placeholder="Повторите пароль"
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
						<p>У вас есть аккаунт? <a href="#"> Авторизация</a></p>
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

export default Registration
