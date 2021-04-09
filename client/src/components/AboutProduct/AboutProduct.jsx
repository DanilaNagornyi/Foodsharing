import React from 'react'

function AboutProduct() {
  return (
    <>
    <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>Об этом продукте</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
        </ol>
      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">

        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                  <p>Опубликовано</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" className="purecounter">0</span>
                  <p>Действительно до</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-clock"></i>
                  <span data-purecounter-start="0" data-purecounter-end="27" className="purecounter">0</span>
                  <p>Количество</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="22" className="purecounter">0</span>
                  <p>Категория</p>
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
            <h3>Пицца</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button href="#about" className="btnauthor">Снять с публикации</button>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    </main>
    </>
  )
}

export default AboutProduct
