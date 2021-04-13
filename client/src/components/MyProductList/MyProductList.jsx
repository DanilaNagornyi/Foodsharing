import React, { useEffect } from "react";
import MyProductCard from "../MyProductCard/MyProductCard";
import { useDispatch } from "react-redux";

function MyProductList({ profile, setProfile }) {
 
  return (
    <div>
      <main id="main">
        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Мои продукты</h2>
              <p>
                Ниже отображается список добавленных вами продуктов, после завершения сделки кликните на кнопку - снять с публикации
              </p>
            </div>

            <div className="row">
              {profile?.product?.length ? (
                profile.product.map((el) => (
                  <MyProductCard
                    item={el}
                    key={el._id}
                    setProfile={setProfile}
                  />
                ))
              ) : (
                <h1>Вы не добавляли продуктов</h1>
              )}
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}
      </main>
    </div>
  );
}

export default MyProductList;
