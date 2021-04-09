import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
   {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html">Foodsharing</a></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="active" to="/">На главную</Link></li>
          <li><Link to="/food">Еда</Link></li>
          <li className="dropdown"><Link to="/"><span>Личный кабинет</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/registration">Регистрация</Link></li>
              <li><Link to="/login">Авторизация</Link></li>
              <li><Link to="/profile">Кабинет</Link></li>
              <li><a href="team.html">Выйти</a></li>
            </ul>
          </li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/fooditem">FoodItem</Link></li>


          <li><a className="getstarted" href="about.html">Принять участие</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
  
  </>
  )
}

export default Navbar
