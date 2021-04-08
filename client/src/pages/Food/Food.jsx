import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Categories from '../../components/Categories/Categories'
import Postlist from '../../components/Postlist/Postlist'
import Map from '../../components/Map/Map'


function Food() {
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
