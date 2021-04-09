import React, { useEffect } from 'react'
import MyProductCard from '../MyProductCard/MyProductCard'
import { useDispatch } from 'react-redux'

function MyProductList({ profile }) {
  // Туть надо размапить массив, который лежит в профайл
  const backgroundImage = {
    backgroundImage: 'url(assets/img/features-2.jpg)',
  }
  return (
    <div>
      <main id="main">

{/* <!-- ======= Features Section ======= --> */}
  <section id="features" className="features">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Мои продукты</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        
      <MyProductCard />

        
      </div>

    </div>
  </section>
  {/* <!-- End Features Section --> */}


</main>
    </div>
  )
}

export default MyProductList
