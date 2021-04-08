import React, { useEffect } from 'react'
import MyProductCard from '../MyProductCard/MyProductCard'
import { useDispatch } from 'react-redux'

function MyProductList({ profile }) {
  // Туть надо размапить массив, который лежит в профайл
  return (
    <div>
      MyProductList
      <MyProductCard />
    </div>
  )
}

export default MyProductList
