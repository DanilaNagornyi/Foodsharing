import React from 'react'
import Post from '../Post/Post'
import Map from '../../components/Map/Map'
import { useDispatch } from 'react-redux'
import { changeCategories } from '../../redux/AC/foodAC'

function Postlist() {
  const dispatch = useDispatch()
  //Повесить он клик на каждую категорию
  const data = "milk"
  const handlerClick = () => {
    dispatch(changeCategories(data))
  }
  return (
    <>
    <main id="main">
       {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>ЕДА</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
          </div>
        </div>
      </div>
      <div className="container">
        <ol>
          {/* <li><a href="index.html">Home</a></li>
          <li>Blog</li> */}
        </ol>
      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Blog Section ======= --> */}
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-8 entries">

            <Post />

            <Map />


            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>

          </div>
          {/* <!-- End blog entries list --> */}

          <div className="col-lg-4">

            <div className="sidebar">

              <h3 className="sidebar-title">Поиск</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text" />
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>
              {/* <!-- End sidebar search formn--> */}

              <h3 className="sidebar-title">Категории</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">Все продукты <span>(25)</span></a></li>
                  <li><a href="#">Фрукты <span>(12)</span></a></li>
                  <li><a href="#">Овощи <span>(5)</span></a></li>
                  <li><a href="#">Выпечка <span>(22)</span></a></li>
                  <li><a href="#">Напитки <span>(8)</span></a></li>
                  <li><a href="#">Молочные продукты <span>(14)</span></a></li>
                </ul>
              </div>
              {/* <!-- End sidebar categories--> */}
            <button href="#about" className="btnmap">Посмотреть на карте</button>

              <h3 className="sidebar-title">По тэгам</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>
              {/* <!-- End sidebar tags--> */}

            </div>
            {/* <!-- End sidebar --> */}

          </div>
          {/* <!-- End blog sidebar --> */}

        </div>

      </div>
    </section>
    {/* <!-- End Blog Section --> */}



    </main>


    </>
  )
}

export default Postlist
