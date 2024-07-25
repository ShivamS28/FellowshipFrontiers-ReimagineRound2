import React from 'react'

const P2card = ({top,left,img,index}) => {

  return (
    <div className={`p2-card w-[16vw] py-2 absolute ${top} ${left} ${index} -translate-x-[50%]`}>
        <img className='w-full h-[20vw] ease-in-out duration-200 hover:saturate-100 saturate-0' src={img} alt="" />
    </div>
  )
}

export default P2card