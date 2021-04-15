import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import useInputs from "../../customHooks/useInput";
import { clearError, setError } from "../../redux/AC/errorAC";
import { regUser } from "../../redux/AC/userAC";
import "./styleForm.css";
import {
  checkName,
  checkSurname,
  checkEmail,
  checkPhone,
  checkCity,
  checkTelegram,
  checkPassword,
  checkConfirmPassword,
} from '../../helpers/validateFormFunc';

function Registration() {
  const err = useSelector((state) => state.error);
  const history = useHistory();
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState({
    photo: "",
  });

  const inputs = [

    useInputs({
      placeholder: 'Введите имя',
      type: 'text',
      name: 'name',
      emptyRequired: true,
      validateFunc: checkName,
    }),

    useInputs({
      placeholder: 'Введите фамилию',
      type: 'text',
      name: 'surname',
      validateFunc: checkSurname
    }),

    useInputs({
      placeholder: 'Введите email',
      type: 'email',
      name: 'email',
      emptyRequired: true,
      validateFunc: checkEmail
    }),

    useInputs({
      placeholder: 'Введите телефон',
      type: 'text',
      name: 'phone',
      emptyRequired: true,
      validateFunc: checkPhone
    }),

    useInputs({
      placeholder: 'Введите телеграм ник',
      type: 'text',
      name: 'telegram',
      emptyRequired: true,
      validateFunc: checkTelegram
    }),

    useInputs({
      placeholder: 'Введите город',
      type: 'text',
      name: 'city',
      validateFunc: checkCity
    }),

    useInputs({
      placeholder: 'Введите пароль',
      type: 'password',
      name: 'password',
      emptyRequired: true,
      validateFunc: checkPassword
    }),

    useInputs({
      placeholder: 'Повторите пароль',
      type: 'Password',
      name: 'confirmPassword',
      emptyRequired: true,
      validateFunc: checkConfirmPassword
    })
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.every(input => input.isValid())) {
      await dispatch(regUser(inputs));
      history.push("/profile");
      inputs.forEach(input => input.clear())
    }
  };

  return (
    <>
      <main id="main"></main>

      {/* <!-- main --> */}
      <div className="main-w3layouts wrapper maindiv">
        <h1>{err}</h1>

        <h1>Регистрация</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit}>


              {
                inputs.map((input, i) => (
                  <div
                    key={i}
                  >
                    <div className="div-form-test">
                      {
                        input.error ? <span className="input-test-index">{input.error}</span> : ''
                      }
                    </div>
                    <input
                      {...input.forTag}
                      className="text email inputformdecor "
                      // className={`text inputformdecor ${!input.error ? 'inputSuccses ' : 'inputError'}`}
                    />
                  </div>
                ))
              }

              {/* <input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" value={inputs.photo}> */ }
              < FileBase
                className="text email inputformdecor inputphoto input-file"
                id="file"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPhoto(base64)}
              />
              <label for="file" className="btn btn-tertiary js-labelFile">
                {inputs.photo ? (
                  <i class="bi bi-check2-square"></i>
                ) : (
                  <i className="icon fa fa-check"></i>
                )}

                <span className="js-fileName">
                  {inputs.photo ? " Фото загружено" : " Загрузить фото"}
                </span>
              </label>

              {/* <input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" value={inputs.photo}> */}

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
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/eggplant.svg"
            />
          </li>
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/pineapple.svg"
            />
          </li>
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/strawberry.svg"
            />
          </li>
          <li>
            <img className="img-bubbles" src="../../../assets/img/apple.svg" />
          </li>
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/bananas.svg"
            />
          </li>
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/bell-pepper.svg"
            />
          </li>
          <li>
            <img
              className="img-bubbles"
              src="../../../assets/img/broccoli.svg"
            />
          </li>
          <li>
            <img className="img-bubbles" src="../../../assets/img/carrot.svg" />
          </li>
          <li>
            <img className="img-bubbles" src="../../../assets/img/fruit.svg" />
          </li>
        </ul>
      </div>
      {/* <!-- //main --> */}
    </>
  );
}

export default Registration;
