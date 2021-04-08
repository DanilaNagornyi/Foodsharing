import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Categories from '../../components/Categories/Categories'
import Postlist from '../../components/Postlist/Postlist'
import Map from '../../components/Map/Map'
import { useDispatch } from 'react-redux'
import { getAllFoodFromServer } from '../../redux/AC/foodAC'

function Food() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllFoodFromServer())
  }, [])
  return (
    <div>
      Food
      <Navbar />
      <Categories />
      <Postlist />
      <Map />
    </div>
  )
}

export default Food
