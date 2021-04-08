import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutProduct from '../../components/AboutProduct/AboutProduct'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import MapMini from '../../components/MapMini/MapMini'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

function FoodItem() {
  let { id } = useParams();
  const post = useSelector(state => state.food)
  const dispatch = useDispatch()
  useEffect(() => {

  }, [])
  return (
    <div>
      FoodItem
      <Navbar />
      <AboutProduct />
      <AuthorInfo />
      <MapMini />
    </div>
  )
}

export default FoodItem
