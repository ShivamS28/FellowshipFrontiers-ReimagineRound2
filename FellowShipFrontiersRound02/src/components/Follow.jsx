import React, { useState } from 'react'
import FollowLeft from './FollowLeft'
import FollowCenter from './FollowCenter'
import FollowRight from './FollowRight'

const Follow = () => {
  const [activeImage,setActiveImage]=useState(0);

  const handleDataLeft = (key)=>{
    setActiveImage(key);
  }
  
  return (
    <div className='w-[94vw] h-screen flex items-center justify-evenly bg-[#dbdbdb]'>
        <FollowLeft sendDataToParent={handleDataLeft}/>
        <FollowCenter imgdata={activeImage}/>
        <FollowRight/>
    </div>
  )
}

export default Follow