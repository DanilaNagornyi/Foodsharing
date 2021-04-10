import React from 'react'
import { Link } from 'react-router-dom'

function Post({ post }) {
  return (

    <article className="entry">

      <div className="entry-img">
        <img src={post.photo} alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <a href="blog-single.html">{post.name}</a>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">{post.category}</a></li>
          <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{post.publishedBy}</time></a></li>
          <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">12 Comments</a></li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{post.description}</p>
        <div className="read-more">
          <Link to={`/food/${post._id}`}  >Read More</Link>
        </div>
      </div>

    </article >
  )
}

export default Post
