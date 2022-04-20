import React from 'react'
import Vector from './Vector.png'
import vector from "./vector1.png"

const Profile = ({image, onForward, onBackward}) => {

  return (
    <div>
      <div className="flex flex-row justify-items-center items-center">
        <button className="p-10" onClick={() => onForward()}>
          <img className="w-4 h-4" src={Vector} alt=""/>
        </button>
        <img className="inline object-cover w-40 h-40 mr-2 rounded-full bg-white drop-shadow-lg border-2 border-sky-500" src={image} alt="profile"/>
        <button className="p-10" onClick={() => onBackward()}>
          <img className="w-4 h-4" src={vector} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Profile
