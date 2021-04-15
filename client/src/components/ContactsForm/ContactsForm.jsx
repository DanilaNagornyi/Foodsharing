const ContactsForms = () => {

  const mapStyle = {
    border: "0",
    width: "100%",
    height: "270px",
  }

  return (
    <>
      <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <div className="container">
              <div className="breadcrumb-hero">
                <h2>Наши контакты</h2>
                <p>Свяжитесь с нами по телефону или через форму на нашем сайте ниже </p>
              </div>
            </div>
          </div>
          <div className="container">
            <ol>

            </ol>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">

            <div>
              <iframe style={mapStyle} src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bf8f48277f7c78bc409de190e483b51b3ed57a9e7919df49e56f328714fe2d3&amp;source=constructor" frameborder="0" allowfullscreen></iframe>
            </div>

            <div className="row mt-5">

              <div className="col-lg-4" data-aos="fade-right">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Локация:</h4>
                    <p>Москва, ул.Вавилова, д.3 стр.1 (м. Ленинский проспект)</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@foodsharing.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Телефон:</h4>
                    <p>+7 999 700 77 07</p>
                    <p>+7 495 700 77 07</p>

                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                <form action="/404" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Ваш Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Тема" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Ваше сообщение пишите тут!" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Загрузка</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Ваше сообщение отправлено! Спасибо!</div>
                  </div>
                  <div className="text-center"><button type="submit">Отправить сообщение</button></div>
                </form>

              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      {/* <!-- End #main --> */}

    </>
  );
}

export default ContactsForms;
