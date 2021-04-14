import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <img className="imglogo" src="/assets/img/logo-harvest.svg"></img>{" "}
              <a className="navtext" href="/">
                Foodsharing
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink activeClassName="active"  exact to="/">
                  На главную
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/food" activeClassName="active" >Еда</NavLink>
              </li>
              <li className="dropdown">
                <NavLink activeClassName="active"  exact to="/profile">
                  <span>{auth ? "Личный кабинет": "Вход"}</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  {auth ? (
                    <>
                      {" "}
                      <li>
                        <NavLink   to="/profile">Кабинет</NavLink>
                      </li>
                      <li>
                        <NavLink to="" onClick={handlerlogout}>
                          Выйти
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/registration">Регистрация</NavLink>
                      </li>
                      <li>
                        <NavLink to="/login">Авторизация</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
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
