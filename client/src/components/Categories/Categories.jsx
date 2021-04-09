import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCategories } from '../../redux/AC/foodAC'

function Categories() {
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

            <article className="entry">

              <div className="entry-img">
                <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>

            </article>
            {/* <!-- End blog entry --> */}

            <article className="entry">

              <div className="entry-img">
                <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                  Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>

            </article>
            {/* <!-- End blog entry --> */}

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
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>
              </div>
              {/* <!-- End sidebar categories--> */}

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

export default Categories
