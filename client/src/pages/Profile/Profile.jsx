import React, { useEffect, useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import ArhivMyProductList from '../../components/ArсhiveMyProductList/ArсhiveMyProductList'
import Footer from '../../components/Footer/Footer'
import MyProductList from '../../components/MyProductList/MyProductList'
import Navbar from '../../components/Navbar/Navbar'
import { userAuth } from '../../redux/AC/userAC'

function Profile() {

  const [profile, setProfile] = useState({})
  const [archive, setArchive] = useState(false)
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
  const handlerActual = () => {
    setArchive(false)
  }
  const handlerArchive = () => {
    setArchive(true)
  }
  return (
    <div>
      Profile
      <AboutMe setProfile={setProfile} profile={profile} />
      <div className="div-btn-profile">
        <button className="btnproduct" onClick={handlerActual}>Актуальные</button>
        <button className="btncustom" onClick={handlerArchive}>Архивные</button>

      </div>
      {archive
        ? <ArhivMyProductList setProfile={setProfile} profile={profile} />
        : <MyProductList setProfile={setProfile} profile={profile} />
      }
    </div>
  )
}

export default Profile
