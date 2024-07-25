import React from 'react'

const P3card = ({x,src,z}) => {
  return (
    <div className={`t1 relative ${x} ${z} saturate-0 hover:saturate-100 ease-in-out duration-300 w-[20vw] h-[25vw] shadow-md shadow-zinc-800 bg-slate-300`}>
      <img className='w-full h-full object-cover' src={src} alt="" />
    </div>
  )
}

export default P3card