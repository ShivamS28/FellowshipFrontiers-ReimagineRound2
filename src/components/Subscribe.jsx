import gsap from 'gsap'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-[94vw] p-10 bg-[#dbdbdb]'>
        <div className='my-20 w-full text-white flex flex-col items-center justify-center py-5 bg-black'>
            <h2 className='text-[3vw] uppercase tracking-tight font-semibold '>Upgrade your reading exprience</h2>
            <p className='text-[1.3vw] opacity-90'>Subscribe to get access to our exclusive Vogue reader app</p>
            <div
                onMouseEnter={()=>{
                    gsap.to(".up",{
                        top:0,
                    })
                }}
                onMouseLeave={()=>{
                    gsap.to(".up",{
                        top: 50,
                    })
                }}
            className='w-fit relative border mt-5 overflow-hidden hover:bg-white transition-all duration-[0.10] hover:text-black '>
                <button className='px-4 py-2 relative z-10'>Subscribe</button>
                <div className='up w-full h-full absolute left-0 bottom-50 bg-white'></div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe