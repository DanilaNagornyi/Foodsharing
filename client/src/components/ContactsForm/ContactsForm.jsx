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
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="breadcrumb-hero">
              <div class="container">
                <div class="breadcrumb-hero">
                  <h2>Наши контакты</h2>
                  <p>Свяжитесь с нами по телефону или через форму на нашем сайте ниже </p>
                </div>
              </div>
            </div>
            <div class="container">
              <ol>
                
              </ol>
            </div>
          </section>
          {/* <!-- End Breadcrumbs --> */}

          {/* <!-- ======= Contact Section ======= --> */}
          <section id="contact" class="contact">
            <div class="container">

              <div>
                <iframe style={mapStyle} src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bf8f48277f7c78bc409de190e483b51b3ed57a9e7919df49e56f328714fe2d3&amp;source=constructor" frameborder="0" allowfullscreen></iframe>
              </div>

              <div class="row mt-5">

                <div class="col-lg-4" data-aos="fade-right">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt"></i>
                      <h4>Локация:</h4>
                      <p>Москва, ул.Вавилова, д.3 стр.1 (м. Ленинский проспект)</p>
                    </div>

                    <div class="email">
                      <i class="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>info@foodsharing.com</p>
                    </div>

                    <div class="phone">
                      <i class="bi bi-phone"></i>
                      <h4>Телефон:</h4>
                      <p>+7 999 700 77 07</p>
                      <p>+7 495 700 77 07</p>

                    </div>

                  </div>

                </div>

                <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Ваше имя" required />
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Ваш Email" required />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Тема" required />
                    </div>
                    <div class="form-group mt-3">
                      <textarea class="form-control" name="message" rows="5" placeholder="Ваше сообщение пишите тут!" required></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Загрузка</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Ваше сообщение отправлено! Спасибо!</div>
                    </div>
                    <div class="text-center"><button type="submit">Отправить сообщение</button></div>
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
