import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCategories } from '../../redux/AC/foodAC'

function Categories() {
  const dispatch = useDispatch()
  //Повесить он клик на каждую категорию
  const data = "milk"
  const handlerClick = () => {
    dispatch(changeCategories(data))
  }
  return (
   <>
   </>
  )
}

export default Categories
