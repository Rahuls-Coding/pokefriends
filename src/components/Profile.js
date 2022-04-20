import React from 'react'

const Profile = ({image}) => {

  return (
    <div>
      <div className="flex flex-row">
        <img src='' alt=""/>
        <img className="inline object-cover w-40 h-40 mr-2 rounded-full bg-white drop-shadow-lg border-2 border-sky-500" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Profile
