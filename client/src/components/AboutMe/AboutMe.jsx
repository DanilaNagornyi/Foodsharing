import React from 'react'

function AboutMe({ profile }) {
  const { user } = profile

  //Туть надо достать данные из profile.user
  return (
    <>
      <main id="main">

        {/* <!-- ======= Work Process Section ======= --> */}
        <section id="work-process" class="work-process">
          {user ?
            <div class="container">

              <div class="section-title" data-aos="fade-up">
                <h2>{user?.name}</h2>
                <p>{user?.surname}</p>
              </div>

              <div class="row content">
                <div class="col-md-5" data-aos="fade-right">
                  <img src={user?.photo} class="img-fluid" alt="" />
                </div>
                <div class="col-md-7 pt-4" data-aos="fade-left">
                  <h3>{user?.city}</h3>
                  <p class="fst-italic">
                    {user?.email}
                  </p>
                  <ul>
                    <li><i class="bi bi-check"></i> {user?.phone}</li>
                    <li><i class="bi bi-check"></i> t.me/{user?.telegram}</li>
                  </ul>
                </div>
              </div>

            </div> : <p>Данные загружаются</p>}
        </section>
        {/* <!-- End Work Process Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="fade-in">

            <div className="text-center">
              <h3>Добавить продукт</h3>
              <p> Добавьте продукт который котите отдать людям</p>
              <a className="cta-btn" href="#">Добавить</a>
            </div>

          </div>
        </section>
        {/* <!-- End Cta Section --> */}

      </main>
    </>
  )
}

export default AboutMe
