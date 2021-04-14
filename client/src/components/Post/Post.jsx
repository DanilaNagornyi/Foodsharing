import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Loader from "../Loader/Loader";

function Post({ post }) {
  const categories = {
    Fruits: "Фрукты",
    Vegetables: "Овощи",
    BabyFood: "Детское питание",
    BakeryProducts: "Хлеб и выпечка",
    Beverages: "Напитки",
    MilkProducts: "Молочные продукты",
    Canned: "Консервированные",
    Meat: "Мясо, рыба",
    HomeFood: "Домашняя кухня",
    Cereals: "Крупы",
  };

  return (
    <>
      {post ? (
        <article className="entry">
          <div className="entry-img">
            <Link to={`/food/${post._id}`}>
              <img src={post.photo} alt="" className="img-fluid" />
            </Link>
          </div>

          <h2 className="entry-title">
            <Link to={`/food/${post._id}`}>{post.name}</Link>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center">
                <i>
                  <img
                    src={`/assets/img/typeIcons/${post.category}.png`}
                    className="imgTypeProduct"
                  ></img>
                </i>
                <Link to={`/food/${post._id}`}>
                  {categories[post.category]}
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i>{" "}
                <Link to={`/food/${post._id}`}>
                  <time datetime="2020-01-01">
                    {post.publishedBy.slice(0, 17)}
                  </time>
                </Link>
              </li>
            </ul>
          </div>

          <div className="entry-content">
            <p>{post.description}</p>
            <div className="read-more">
              <Link to={`/food/${post._id}`}>Подробнее</Link>
            </div>
          </div>
        </article>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Post;
