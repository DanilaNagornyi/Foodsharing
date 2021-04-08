import React from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import MyProductList from '../../components/MyProductList/MyProductList'
import Navbar from '../../components/Navbar/Navbar'

function Profile() {
  return (
    <div>
      <Navbar />
      Profile
      <AboutMe />
      <MyProductList />
    </div>
  )
}

export default Profile
