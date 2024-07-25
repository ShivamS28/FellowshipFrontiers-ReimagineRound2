import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const diff = currentScrollPos - scrollPos;

      if (diff > 0) {
        gsap.to('.navbar', {
          duration: 1,
          y: -100,
        });
      } else if (diff < 0) {
        gsap.to('.navbar', {
          duration: 1,
          y: 0,
        });
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const handleMouseOver = (index) => {
    gsap.to(`.line-${index}`, {
      width: '100%',
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.line-${index}`, {
      width: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  return (
    <div className="navbar w-screen py-4 pl-6 pr-32 fixed top-0 left-1/2 -translate-x-1/2 z-40 flex justify-between items-center border-b-2 bg-[#dbdbdb] border-zinc-900">
      <div>
        <img
          className="w-36"
          src="https://www.vogue.com/verso/static/vogue/assets/us/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="flex gap-10">
        {['Beauty', 'Fashion', 'Shopping', 'Subscribe'].map((elem, idx) => (
          <div
            key={idx}
            onMouseLeave={() => handleMouseLeave(idx)}
            onMouseOver={() => handleMouseOver(idx)}
            className="lg:flex lg:visible relative flex-col justify-center hidden "
          >
            <h3 className="text-lg font-semibold cursor-pointer uppercase text-[#2e2e2e] tracking-tighter">
              {elem}
            </h3>
            <span
              className={`line-${idx} line inline-block absolute bottom-0 left-0 w-0 h-[3px] bg-black`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;