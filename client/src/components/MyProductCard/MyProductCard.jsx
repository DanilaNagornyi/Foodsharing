import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'

function MyProductCard({ item, setProfile }) {
  const handlerChangeStatus = async () => {
    const resp = await fetch("http://localhost:3001/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ id: item._id })

    })
    if (resp.status === 200) {
      setProfile(prev => {
        let product = prev.product.map(el => el._id === item._id ? { ...el, status: true } : el)
        return { ...prev, product }
      })
    }
  }

  const backgroundImage = {
    backgroundImage: `url(${item.photo})`
  }

  return (
    <>
      <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
        <div className="card" style={backgroundImage} >
          <div className="card-body">
            <h5 className="card-title"><a href="">{item.name}</a></h5>
            <p className="card-text">{item.description}</p>
            {item.status ? <div className="read-more"><Link to="#" onClick={handlerChangeStatus}><i className="bi bi-arrow-right"></i>Снять с публикации</Link></div>
              : null}

          </div>
        </div>
      </div>


    </>
  )
}

export default MyProductCard
