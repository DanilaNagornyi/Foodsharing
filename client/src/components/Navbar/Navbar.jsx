import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/AC/userAC";
import { useHistory } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.user.isAuth);

  const handlerlogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <img className="imglogo" src="assets/img/logo-harvest.svg"></img>{" "}
              <a className="navtext" href="/">
                Foodsharing
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="active" to="/">
                  На главную
                </Link>
              </li>
              <li>
                <Link to="/food">Еда</Link>
              </li>
              <li className="dropdown">
                <Link>
                  <span>{auth ? "Личный кабинет": "Вход"}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  {auth ? (
                    <>
                      {" "}
                      <li>
                        <Link to="/profile">Кабинет</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={handlerlogout}>
                          Выйти
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/registration">Регистрация</Link>
                      </li>
                      <li>
                        <Link to="/login">Авторизация</Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>

              {auth ? (
                <li>
                  <Link className="getstarted" to="/addfood">
                    Добавить продукт
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="getstarted" to="rules">
                    Принять участие
                  </Link>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default Navbar;
