import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import P3card from './P3card';
import { FaArrowRightLong ,FaArrowLeftLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Page3 = () => {
  const elementRef = useRef(null);
  const wrape = useRef(null);
  const [arrow,setArrow] = useState(0)

  useEffect(() => {
   

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.h',
        start: 'top top',
        end: 'center top',
        scrub: true,
      },
    });
    tl.to('.t1', {
      x: '0',
    });
  }, []);

  const handleMouseMove = (e) => {
    setArrow(wrape.current.getBoundingClientRect().left)

    const rect = elementRef.current.getBoundingClientRect();
    const left = wrape.current.getBoundingClientRect().left;
    const x = e.clientX + Math.abs(left);
    const y = e.clientY - rect.top;

    gsap.to('.scroll', {
        opacity:1,
      x: x,
      y: y,
    });
  };
  const handleMouseLeave = () => {
    gsap.to('.scroll', {
        opacity:0,
     });
  }
  return (
    <div className='h w-full h-[300vh] relative flex flex-col items-start justify-between bg-[#dbdbdb]'>
      <div className='w-[94vw] h-screen sticky top-0'>
        <h1 className='magzine ml-14 leading-none text-[9vw] font-[Vogue]'>MAGAZINE</h1>
        <p className='magzine ml-14 text-[1.2vw] font-semibold w-[80%]'>
          READ YOUR FAVOURITE MAGAZINES ANYWHERE, ANYTIME I ENJOY UNLIMITED ACCESS TO OUR ARCHIVES DOWNLOAD THE LATEST ISSUES ON THE VOGUE APP
        </p>
        <div
          ref={elementRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='slider bg-[#2d2e2f] relative mt-16 snap-x flex items-center overflow-x-scroll'
        >
          <div ref={wrape} className='wrapper snap-center shrink-0 w-[94vw] h-full py-4 gap-4 flex items-center justify-around '>
            <P3card x={'translate-x-[80%]'} src={'https://media.vogue.in/wp-content/uploads/2024/06/0001-3-600x777.jpg'} z={'z-10'} />
            <P3card x={'translate-x-0'} src={'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Magazine cover 2.webp'} z={'z-20'} />
            <P3card x={'-translate-x-[80%]'} src={'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Magazine cover 3.webp'} z={'z-10'} />
          </div>
          <div className='wrapper snap-center shrink-0 w-[94vw] h-full gap-4 flex items-center justify-around '>
            <P3card x={'translate-x-[80%]'} src={'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Magazine cover 4.webp'} z={'z-10'} />
            <P3card x={'translate-x-0'} src={'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Magazine cover 5.webp'} z={'z-20'} />
            <P3card x={'-translate-x-[80%]'} src={'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Magazine cover 6.webp'} z={'z-10'} />
          </div>
          <div className='scroll opacity-0 w-20 h-20 z-50 pointer-events-none text-xs flex items-center gap-1 justify-center text-white rounded-full bg-black absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'>
             {500<Math.abs(arrow) && <FaArrowLeftLong />} SCROLL {arrow===0 && <FaArrowRightLong />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
