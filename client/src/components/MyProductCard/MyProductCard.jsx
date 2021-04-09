import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'

function MyProductCard() {

  const backgroundImage = {
    backgroundImage: 'url(assets/img/features-2.jpg)',
  }

  return (
    <>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card" style={backgroundImage} >
              <div className="card-body">
                <h5 className="card-title"><a href="">Картофелини порчини</a></h5>
                <p className="card-text">Сочная картоха с бабушкиной лавки! Осталось всего 5 штук, спешите, вам точно понравится</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i>Снять с публикации</a></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up">
            <div className="card "style={backgroundImage} >
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Plan</a></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card cardone" >
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Vision</a></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card cardone" >
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Care</a></h5>
                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>

       
    </>
  )
}

export default MyProductCard
