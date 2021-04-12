import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Main() {
  return (
    <>
       {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero">
    <div className="hero-container" data-aos="fade-up">
      <h1>Welcome to FruitNinja</h1>
      <h2>Шаг на пути к независимости от системы безумного потребления</h2>
      <a href="#about" className="btn-get-started scrollto">Присоединиться</a>
    </div>
  </section>
  {/* <!-- End Hero --> */}
  <main id="main">
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">

          <div className="row justify-content-end">
            <div className="col-lg-11">
              <div className="row justify-content-end">

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box pb-5 pt-0 pt-lg-5">
                  </div>
                </div>
                 

              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-6 video-box align-self-baseline position-relative">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
            </div>

            <div className="col-lg-6 pt-3 pt-lg-0 content">
              <h3>Учавствуя в проекте Фудшеринг, вы делаете значимый шаг на пути к независимости от системы безумного потребления.</h3>
              <p className="fst-italic">
              Фудшеринг — это социально-экологическое движение, которое помогает решить проблему нерационального использования ресурсов планеты и помогает организациям и простым людям перестать выбрасывать еду, а нуждающимся людям — получать её абсолютно бесплатно для себя и близких.

              </p>
              <ul>
                <li><i className="bx bx-check-double"></i> В мусорном ведре оказывается треть всех продуктов питания на планете.</li>
                <li><i className="bx bx-check-double"></i> Глобальная экономика теряет из-за этого порядка триллиона долларов ежегодно.</li>
                <li><i className="bx bx-check-double"></i> Каждый человек за день выбрасывает в среднем по бигмаку, следовательно за год это более 1 миллиарда  300 миллионов тонн еды</li>
                <li><i className="bx bx-check-double"></i> А между тем  два миллиарда людей недоедают или вынуждены питаться некачественной едой.</li>
              </ul>
              <p>
              Но самое печальное, что более 800 миллионов жителей Земли умирают от голода и цифра продолжает расти.

              </p>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services ">
      <div className="container">

        <div className="section-title pt-5" data-aos="fade-up">
          <h2>О НАШЕМ ПРОЕКТЕ</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-cart-x" ></i></div>
              <h4 className="title"><a href="">Разумное потребление</a></h4>
              <p className="description">Мы продвигаем идею разумного потребления продуктов, ведь есть люди которые нуждаются</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i className="bi bi-people" ></i></div>
              <h4 className="title"><a href="">Миссия платформы</a></h4>
              <p className="description">Мы помогаем организациям и простым людям перестать выбрасывать еду, а нуждающимся людям — получать её абсолютно бесплатно для себя и близких.
</p>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-briefcase briefcasecolor" ></i></div>
              <h4 className="title"><a href="">Вклад организаций</a></h4>
              <p className="description">Мы предлагаем партнёрство ресторанам в нашем проекте, ведь рестораны выбрасывают тонны еды в год</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-trash" ></i></div>
              <h4 className="title"><a href="">Не выбрасывайте еду</a></h4>
              <p className="description">Мы сможем забрать вашу еду и передать её нуждающимся пользователям нашей платформы</p>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-globe" ></i></div>
              <h4 className="title"><a href="">Ресурсы планеты</a></h4>
              <p className="description">Рациональный расход ресурсов нашей планеты - это наша общая миссия, мы должны позаботиться о наших потомках</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-bell" ></i></div>
              <h4 className="title"><a href="">Правила платформы</a></h4>
              <p className="description">Ознакомьтесь при регистрации с условиями нашей платформы, это небольшой свод правил которые мы соблюдаем</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
    
    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container" data-aos="fade-in">

        <div className="text-center">
          <h3>Принять участие</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link className="cta-btn" to="rules">Принять участие</Link>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}



    </main>
    </>
  )
}

export default Main
