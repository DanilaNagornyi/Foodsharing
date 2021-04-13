import { Link } from "react-router-dom";

const Footer = () => {
  return ( 
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Fruitoninja</h3>
                <p>Фудшеринг - это социально-экологическое движение, которое помогает решить проблему нерационального использования ресурсов планеты</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Навигация</h4>
                <ul>
                  <li><a href="#hero">В начало</a></li>
                  <li><a href="#about">О нас</a></li>
                  <li><Link to="/food">Еда</Link></li>
                  <li><Link to="rules">Правила платформы</Link></li>
                  <li><Link to="/profile">Личный кабинет</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Контакты</h4>
                <p>
                 ул.Вавилова, д.3 стр.1 <br />(м. Ленинский проспект) <br />
                 Москва, 15022<br />
                  Российская Федерация <br />
                  <strong>Phone:</strong> +7 999 700 77 07<br />
                  <strong>Phone:</strong> +7 495 700 77 07<br />
                  <strong>Email:</strong> info@foodsharing.com<br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter"><i className="bi bi-telegram"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Правила платформы</h4>
                <p>Ознакомьтесь при регистрации с условиями нашей платформы, это небольшой свод правил которые мы соблюдаем</p>
                <form action="" method="post">
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Fruitoninja</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
          
            Designed by <a href="/">Fruitoninja Team</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

    </>
   );
}
 
export default Footer;
