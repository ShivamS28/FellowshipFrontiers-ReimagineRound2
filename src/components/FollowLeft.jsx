import React, { useState } from 'react';

const FollowLeft = ({ sendDataToParent }) => {
  const [activeImage, setActiveImage] = useState(0);

  const magazines = [
    { name: 'Vogue', img: 'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/Vogue.webp' },
    { name: 'GQ', img: 'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/gq-logo-white.webp' },
    { name: 'Traveller', img: 'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/cnt-logo-white.webp' },
    { name: 'AD', img: 'https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/public/ad-new-logo-white.webp' },
  ];

  const handleClick = (key) => {
    setActiveImage(key);
    sendDataToParent(key);
  };

  return (
    <div className="flex w-[28%] flex-wrap items-center justify-center gap-20">
      {magazines.map((mag, index) => (
        <div key={index} className="relative flex items-center justify-center w-[8vw] h-[8vw] rounded-full bg-black">
          <img src={mag.img} alt={mag.name} className="w-full object-cover object-center border" />
          <div
            onClick={() => {
              handleClick(index);
            }}
            className={`absolute bottom-[-10%] left-1/2 ${index === activeImage ? "bg-red-500" : "bg-white"} hover:bg-red-500 -translate-x-1/2 w-[2.5vw] h-[2.5vw] text-[1.5vw] rounded-full flex items-center justify-center text-black cursor-pointer`}
          >
            +
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowLeft;