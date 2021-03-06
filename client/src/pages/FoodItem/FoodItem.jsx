import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutProduct from "../../components/AboutProduct/AboutProduct";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import MapMini from "../../components/MapMini/MapMini";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function FoodItem() {
  let { id } = useParams();
  const post = useSelector((state) => state.food);
  const product = post.find((el) => el._id === id);

  const dispatch = useDispatch();
  return (
    <div>
      <AboutProduct curProduct={product} />
      <AuthorInfo id={product?.owner} />
      <MapMini coordinate={product?.coordinate} />
    </div>
  );
}

export default FoodItem;
