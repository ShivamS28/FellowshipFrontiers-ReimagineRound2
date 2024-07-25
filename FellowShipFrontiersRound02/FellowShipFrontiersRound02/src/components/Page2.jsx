import React, { useEffect, useState } from 'react'
import P2card from './P2card'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

  useEffect(()=>{
    ScrollTrigger.refresh();
  gsap.to(".hor",{
    x: "-130%",
    scrollTrigger:{
      trigger:".page2",
      start:"top top",
      end:"bottom top",
      scrub:true,
    }
  })
  gsap.to(".p2-card",{
    x:"-100%",
    rotate:"10deg",
    scrollTrigger:{
      trigger:".page2",
      start:"top top",
      end:"bottom top",
      scrub:true,
    }
  })
},[])
  
  return (
    <>
    <div className='page2 w-full min-h-[300vh] relative bg-[#dbdbdb] p-10'>
        <div className='hor-page sticky top-0 h-screen  overflow-x-hidden pl-20 pr-40 flex flex-nowrap items-center'>
         <div className="hor relative w-fit flex items-center flex-nowrap">
          
        <P2card top={"top-[-7%]"} left={`left-[20%]`} index={"z-[20]"} img={"https://imgs.search.brave.com/YvAFDxBN5ZsXYnUo17UzsCXmGEc0cYpiBn5cpsoAVMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGdXVKMkEtU0wu/anBn"}/>
        <P2card top={"top-[40%]"} left={"left-[50%]"} index={"z-[10]"} img={"https://imgs.search.brave.com/yQ29ONndqwIlqQ9xITWZCkry946Ezm6yDNPlnXjJ2_Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE5RjBBZHo5Mkwu/anBn"}/>
        <P2card top={"top-[40%]"} left={"left-[100%]"} index={"z-[20]"} img={"https://imgs.search.brave.com/yJ2-IuBxRmRqg6VvVgaMEJXOEh6mIYKUagFx2TIdCMA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzL2Jl/L2RlLzQzYmVkZTEz/Nzg2NmFkZGIyMWMz/OWU0NGM5NDY4NmMz/LmpwZw"}/>
        <P2card top={"top-[-10%]"} left={"-right-[50%]"} index={"z-[10]"} img={"https://imgs.search.brave.com/RXqm7YXuKaA74sSE0ZZsFR6ps9GN6iuy869NYM03qGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzk1/LzE5LzZmOTUxOTAw/YWE2MWM0NmVmZDc2/NmVmMTk5NjE0YTkw/LmpwZw"}/>
        <P2card top={"top-[40%]"} left={"-right-[90%]"} index={"z-[20]"} img={"https://imgs.search.brave.com/MqOTvO9pKJN0LKGsvIGxF1n-IhymcjUF8KUpzuiXeUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFrZlJ0Q3Vka0wu/anBn"}/>
           <h1 className='tracking-widest relative z-10 flex-shrink-0 pointer-events-none leading-none text-[30vw] text-center font-[Vogue]'>VOGUE INDIA</h1>
         </div>
        </div>
    </div>
    </>
  )
}

export default Page2

