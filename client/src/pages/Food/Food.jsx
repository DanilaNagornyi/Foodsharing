import React, { useEffect } from 'react'
import Postlist from '../../components/Postlist/Postlist'
import { useDispatch } from 'react-redux'
import { getAllFoodFromServer } from '../../redux/AC/foodAC'

function Food() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllFoodFromServer())
  }, [])
  return (
    <>
      <Postlist />
    </>
  )
}

export default Food
