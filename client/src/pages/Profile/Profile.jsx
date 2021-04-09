import React, { useEffect, useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'
import MyProductList from '../../components/MyProductList/MyProductList'
import Navbar from '../../components/Navbar/Navbar'

function Profile() {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    fetch('http://localhost:3001/profile', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => setProfile(response))
  }, [])
  return (
    <div>
      Profile
      <AboutMe setProfile={setProfile} profile={profile} />
      <MyProductList setProfile={setProfile} profile={profile} />
    </div>
  )
}

export default Profile
