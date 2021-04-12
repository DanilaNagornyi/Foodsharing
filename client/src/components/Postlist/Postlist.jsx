import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import Map from '../../components/Map/Map'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategories, getAllFoodFromServer, productSearch } from '../../redux/AC/foodAC'
import { Link, useParams } from "react-router-dom"
import { getSubscribe, addSubscribe } from '../../redux/AC/subscribeAC'

function Postlist() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const { name } = useParams();
  const [map, setMap] = useState(false)
  const posts = useSelector(state => state.food)
  const foodLength = useSelector(state => state.foodLength)
  const submithandler = (e) => {
    e.preventDefault()
    dispatch(productSearch(value))
  }
  const subcribeHandler = (data) => {
    dispatch(addSubscribe(data))
  }
  useEffect(() => {
    name
      ?
      dispatch(changeCategories(name))
      :
      dispatch(getAllFoodFromServer())
  }, [name])

  useEffect(() => {
    dispatch(getSubscribe())
  }, [])


  const handleShow = () => {
    setMap(prev => !prev)
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
                {map
                  ? <Map />
                  :
                  posts.length ? posts.map(el => <Post post={el} key={el._id} />) : <h1>Нет постов для отображения</h1>
                }





                < div className="blog-pagination">
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
                    <form onSubmit={submithandler}>
                      <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                      <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                  {/* <!-- End sidebar search formn--> */}

                  <h3 className="sidebar-title">Категории</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      <li><Link to="/food">Все продукты <span>({foodLength.reduce((a, v) => v.productsList.length + a, 0)})</span></Link></li>
                      <li><Link to="/category/Fruits">Фрукты <span>({foodLength[0]?.productsList.length})</span></Link></li>
                      <li><Link to="/category/Vegetables">Овощи <span>({foodLength[1]?.productsList.length})</span></Link></li>
                      <li><Link to='/category/Cereals"'>Крупы <span>({foodLength[2]?.productsList.length})</span></Link></li>
                      <li><Link to="/category/Beverages">Напитки <span>({foodLength[5]?.productsList.length})</span></Link></li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}
                  <button className="btnmap" onClick={handleShow}>{map ? "Скрыть карту" : "Посмотреть на карте"}</button>

                  <h3 className="sidebar-title">Подписаться на категорию</h3>
                  <div className="sidebar-item tags">
                    <ul>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Fruits" to="#">Фрукты</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Vegetables">Овощи</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="BabyFood">Детское питание</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="HomeFood">Домашняя кухня</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Cereals">Крупы</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="BakeryProducts">Хлеб и выпечка</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="MilkProducts">Молочные продукты</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Meet">Мясо,рыба</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Beverages">Напитки</Link></li>
                      <li><Link onClick={(e) => e.preventDefault(subcribeHandler(e.target.name))} name="Canned">Консервированные продукты</Link></li >
                    </ul >
                  </div >
                  {/* <!-- End sidebar tags--> */}

                </div >
                {/* <!-- End sidebar --> */}

              </div >
              {/* <!-- End blog sidebar --> */}

            </div >

          </div >
        </section >
        {/* <!-- End Blog Section --> */}



      </main >


    </>
  )
}

export default Postlist
