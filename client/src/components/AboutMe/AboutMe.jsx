import React from 'react'
import { Link } from 'react-router-dom'

function AboutMe({ profile }) {
  //Туть надо достать данные из profile.user
  return (
    <>
    <main id="main">

    {/* <!-- ======= Work Process Section ======= --> */}
    <section id="work-process" class="work-process">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Тарас Тапакыч</h2>
          <p>Шеф-Повар ресторана Чавка</p>
        </div>

        <div class="row content">
          <div class="col-md-5" data-aos="fade-right">
            <img src="assets/img/work-process-1.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-7 pt-4" data-aos="fade-left">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
          </div>
        </div>

      </div>
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
