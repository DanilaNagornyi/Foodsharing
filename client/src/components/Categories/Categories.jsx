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
    <div>
      Categories
      <ul>
        <li> Категория 1</li>
        <li> Категория 2</li>
        <li> Категория 3</li>
        <li> Категория 4</li>
      </ul>

    </div>
  )
}

export default Categories
