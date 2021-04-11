import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../EditUserForm/EditUserForm.jsx'

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
        <section id="work-process" class="work-process">
          {change ? <EditUserForm user={user} setChange={setChange} setProfile={setProfile} /> :
            <div class="container" >
              <div class="section-title" data-aos="fade-up">
                <h2>{user?.name} {user?.surname}</h2>
                <p></p>
              </div>

              <div class="row content">
                <div class="col-md-5" data-aos="fade-right">
                  <img src={user?.photo} class="img-fluid" alt="" />
                </div>
                <div class="col-md-7 pt-4" data-aos="fade-left">
                  {/* <h3>{user?.city}</h3> */}

                  <ul>
                    <li><i class="bi bi-check"></i> {user?.city}</li>
                    <li><i class="bi bi-check"></i> {user?.email}</li>
                    <li><i class="bi bi-check"></i> {user?.phone}</li>
                    <li><i class="bi bi-check"></i> t.me/{user?.telegram}</li>
                    <button class="fst-italic" onClick={changeHandler}>
                      Изменить личные данные
                  </button>
                  </ul>
                </div>
              </div>

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
