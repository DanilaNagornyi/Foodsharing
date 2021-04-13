import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { clearError, setError } from "../../redux/AC/errorAC";
import { regUser, regUserByGoogle } from "../../redux/AC/userAC";
import "./styleForm.css";

function Registration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    telegram: "",
    photo: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(regUser(inputs));
    history.push("/profile");
    setInputs({
      name: "",
      surname: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      telegram: "",
    });
  };


  return (
    <>
      <main id="main"></main>

      {/* <!-- main --> */}
      <div className="main-w3layouts wrapper maindiv">

        <h1>Регистрация</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit}>
              <input
                className="text inputformdecor"
                type="text"
                name="name"
                placeholder="Имя"
                required=""
                value={inputs.name}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="surname"
                placeholder="Фамилия"
                required=""
                value={inputs.surname}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={inputs.email}
                onChange={handleChange}
              />
              {/* <input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" value={inputs.photo}> */}
              <FileBase
                className="text email inputformdecor inputphoto input-file"
                id="file"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setInputs({ ...inputs, photo: base64 })}
              />
              <label for="file" className="btn btn-tertiary js-labelFile">
                {inputs.photo ? <i class="bi bi-check2-square"></i> : <i className="icon fa fa-check"></i>}

                <span className="js-fileName">{inputs.photo ? " Фото загружено" : " Загрузить фото"}</span>
              </label>

              {/* <input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" value={inputs.photo}> */}

              <input
                className="text email inputformdecor"
                type="text"
                name="phone"
                placeholder="Телефон"
                required=""
                value={inputs.phone}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="telegram"
                placeholder="Telegram user name @"
                required=""
                value={inputs.telegram}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="city"
                placeholder="Город"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />
              <input
                className="text inputformdecor"
                type="password"
                name="password"
                placeholder="Пароль"
                required=""
                value={inputs.password}
                onChange={handleChange}
              />

              <input
                className="text w3lpass inputformdecor"
                type="password"
                name="password"
                placeholder="Повторите пароль"
                required=""
              />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required="" />
                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                </label>
                <div className="clear"> </div>
              </div>
              <button className="btnlogin">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </form>
            <button className="btngoogle">
              <a href="http://localhost:3001/user/google">
                ВОЙТИ ЧЕРЕЗ{" "}
                <img
                  src="../../../assets/img/google-logo.png"
                  width="27%"
                ></img>
              </a>
            </button>
            <p>
              У вас есть аккаунт? <Link to="/login"> Авторизация</Link>
            </p>
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

export default Registration;
