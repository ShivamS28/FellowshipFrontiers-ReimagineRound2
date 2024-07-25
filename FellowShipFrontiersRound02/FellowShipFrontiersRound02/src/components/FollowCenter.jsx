import gsap from 'gsap';
import React, { useState, useEffect } from 'react';

const FollowCenter = ({ imgdata }) => {
  const magazines = [
    { name: 'Vogue', img: 'public/mobilescreen.webp' },
    { name: 'Vogue', img: 'public/mobilescreen2.webp' },
    { name: 'Traveller', img: 'public/mobilescreen3.webp' },
    { name: 'GQ', img: 'public/mobilescreen4.webp' },
  ];

  const [data, setData] = useState(imgdata);

  useEffect(() => {
    setData(imgdata);

  
    requestAnimationFrame(() => {
      gsap.from(".mscreen", {
        scale: .8,
        onComplete:(()=>{
          gsap.set(".mscreen", {
            scale: 1,
            duration:1
          })
        })
      })
    });
  }, [imgdata]);

  return (
    <>
      {magazines.map((mag, index) => (
        <div key={index} className={`${index === data ? "flex" : "hidden"}  flex-col items-center p-4`}>
          <img className='h-[45vw] w-[20vw] mscreen rounded-lg object-cover' src={mag.img} alt={mag.name} />
        </div>
      ))}
    </>
  );
};

export default FollowCenter;