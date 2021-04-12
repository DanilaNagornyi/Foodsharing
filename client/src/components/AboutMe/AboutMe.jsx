import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../EditUserForm/EditUserForm.jsx'
import Loader from '../Loader/Loader.jsx'

function AboutMe({ profile, setProfile }) {
  const [change, setChange] = useState(false)
  const { user } = profile
  const changeHandler = (e) => {
    e.preventDefault()
    setChange(prev => !prev)
  }
  return (
    <>
      <main id="main">

        {/* <!-- ======= Work Process Section ======= --> */}
        <section id="work-process" className="work-process">
          {change ? <EditUserForm user={user} setChange={setChange} setProfile={setProfile} /> :
            <div className="container" >
               {user? (
                 <>
              <div className="section-title" data-aos="fade-up">
               <h2>{user?.name} {user?.surname}</h2>
                <p></p>
              </div>

              <div className="row content">
                <div className="col-md-5" data-aos="fade-right">
                  <img src={user?.photo} className="img-fluid" alt="" />
                </div>
                <div className="col-md-7 pt-4" data-aos="fade-left">
                  {/* <h3>{user?.city}</h3> */}

                  <ul>
                    <li><i className="bi bi-check"></i> {user?.city}</li>
                    <li><i className="bi bi-check"></i> {user?.email}</li>
                    <li><i className="bi bi-check"></i> {user?.phone}</li>
                    <li><i className="bi bi-check"></i> Telegram: @{user?.telegram}</li>
                    <li><i className="bi bi-check"></i> Мои подписки: <><br/> <i className="bi bi-bell"></i> {user?.telegram} <a href="/"> delete</a></> </li>
                    <button className="btncustom" onClick={changeHandler}>
                      Изменить личные данные
                  </button>
                  </ul>
                </div>
              </div>
                  </>)
                  : <Loader/>} 

            </div>
          }
        </section>
        {/* <!-- End Work Process Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="fade-in">

            <div className="text-center">
              <h3>Добавить продукт</h3>
              <p> Добавьте продукт который котите отдать людям</p>
              <Link className="cta-btn" to="/addfood">Добавить</Link>
            </div>

          </div>
        </section>
        {/* <!-- End Cta Section --> */}

      </main>
    </>
  )
}

export default AboutMe
