import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArhiveMyProductCard from "../ArсhiveMyProductCard/ArсhiveMyProductCard";

function ArсhiveMyProductList({ profile, setProfile }) {

  return (
    <div>
      <main id="main">
        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Архив продуктов</h2>
              <p>
                Ниже отображены продукты, которые вы сняли с публикации, вы можете снова опубликовать продукт, изменив детали
              </p>
            </div>

            <div className="row">
              {profile?.product?.length ? (
                profile.product.map((el) => (
                  <ArhiveMyProductCard
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

export default ArсhiveMyProductList;
