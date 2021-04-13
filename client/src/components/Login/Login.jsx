import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logUser } from "../../redux/AC/userAC";
import { clearError, setError } from "../../redux/AC/errorAC";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logUser(inputs));
    setInputs({ email: "", password: "" });
  
      history.push("/profile")
  };
  return (
    <>
      <main id="main"></main>

      {/* <!-- main --> */}

      <div className="main-w3layouts wrapper maindiv">
        <h1>Авторизация</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form onSubmit={handleSubmit}>
              <input
                className="text email inputformdecor"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={handleChange}
                value={inputs.email}
              />
              <input
                className="text email inputformdecor"
                type="password"
                name="password"
                placeholder="Пароль"
                required=""
                onChange={handleChange}
                value={inputs.password}
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
              <button className="btnlogin">ВОЙТИ</button>
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
              У вас нет аккаунта? <Link to="/registration"> Регистрация</Link>
            </p>
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
        </ul>
      </div>
      {/* <!-- //main --> */}
    </>
  );
}

export default Login;
