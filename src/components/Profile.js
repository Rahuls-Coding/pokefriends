import React from 'react'


const Profile = ({image, onForward, onBackward}) => {

  return (
    <div>
      
        <img className="inline object-cover w-40 h-40 mr-2 rounded-full bg-white drop-shadow-lg border-2 border-sky-500" src={image} alt="profile"/>
        
    </div>
  )
}

export default Profile
