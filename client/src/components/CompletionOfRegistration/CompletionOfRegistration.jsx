import React, { useState } from "react";
import { regUserGoogle } from "../../redux/AC/userAC";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CompletionOfRegistration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    phone: "",
    city: "",
    telegram: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regUserGoogle(inputs));
    setInputs({
      phone: "",
      city: "",
      telegram: "",
    });
    history.push("/");
  };

  return (
    <>
      <main id="main"></main>

      <div className="main-w3layouts wrapper maindiv">
        <h1>Завершение регистрации</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit}>
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
              <button className="btnlogin">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </form>
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
    </>
  );
}
