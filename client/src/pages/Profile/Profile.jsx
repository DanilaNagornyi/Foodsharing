import React, { useEffect, useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'
import MyProductList from '../../components/MyProductList/MyProductList'
import Navbar from '../../components/Navbar/Navbar'
import { userAuth } from '../../redux/AC/userAC'

function Profile() {
  const [profile, setProfile] = useState({})
  console.log(profile);
  useEffect(() => {
    fetch('http://localhost:3001/profile', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => setProfile(response))
  }, [])
  if (profile?.user?.name) {
    userAuth(profile.user.name)
  }
  console.log(profile);
  return (
    <div>
      Profile
      <AboutMe setProfile={setProfile} profile={profile} />
      <MyProductList setProfile={setProfile} profile={profile} />
    </div>
  )
}

export default Profile
