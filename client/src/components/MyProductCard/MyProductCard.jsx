import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditUserFormModal from '../EditFoodFormModal/EditFoodFormModal'
import { changeStatus } from "../../redux/AC/foodAC";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function MyProductCard({ item, setProfile }) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = (id) => {
    setIsOpen(true);
  };

  const handlerChangeStatus = async () => {
    const resp = await fetch("https://fruitoninja.herokuapp.com/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: item._id }),
    });
    if (resp.status === 200) {
      setProfile((prev) => {
        let product = prev.product.map((el) =>
          el._id === item._id ? { ...el, status: false } : el
        );
        return { ...prev, product };
      });
      dispatch(changeStatus(item._id))
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${item.photo})`,
  };

  return (
    <>
      {item.status ? (
        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
          <div className="card" style={backgroundImage}>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/food/${item._id}`}>{item.name}</Link>
              </h5>
              <p className="card-text">{item.description}</p>
              <div className="read-more">
                <Link to="#" onClick={handlerChangeStatus}>
                  <i className="bi bi-arrow-right"></i>Снять с публикации
                </Link>
              </div>
              <div className="read-more">
                <Link to="#" onClick={clickHandler}>
                  <i className="bi bi-arrow-right"></i>Изменить
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? (
        <div style={BUTTON_WRAPPER_STYLES}>
          <EditUserFormModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            food={item}
            setProfile={setProfile}
          />
        </div>
      ) : null}
    </>
  );
}

export default MyProductCard;
