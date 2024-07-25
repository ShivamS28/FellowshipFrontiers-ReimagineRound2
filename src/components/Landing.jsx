import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from "gsap";

const Landing = () => {
  const main = useRef(null);
  const incoming = useRef(null);
  let curr = 2;
  const [detsIdx, setDetsIdx] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const data = [
    {
      img: "https://raw.githubusercontent.com/ShivamS28/FellowshipFrontiers-ReimagineRound2/main/src/assets/Landpage img 1.jpg",
      tag: "BEAUTY",
      title: "KRITI SANON'S SECRET TO A STRONG CORE IS THIS EXERCISE— HERE'S WHY YOU NEED TO TRY IT TOO",
      desc: "Kriti Sanon takes fitness to new heights with planks on treadmill for a strong core.",
      name: "SALONI KARNANI",
      date: "30 JUNE 2023",
    },
    {
      img: "./src/assets/Landpage img 2.jpg",
      tag: "FASHION",
      title: "THE ULTIMATE OUT- OF-OFFICE STAPLES THAT REALLY MEAN BUSINESS? BLAZERS THAT GO WITH SKIRTS",
      desc: "The secrets of success this season?Confidence, precision, flashes of brilliance—and a wardrobe to back it up",
      name: "SHRIYA ZAMINDAR",
      date: "19 FEBRUARY 2023",
    },
    {
      img: "./src/assets/Landpage img 3.jpg",
      tag: "CULTURE & LIVING",
      title: "IMRAN KHAN: THE HUNK WHO SOLD HIS FERRARI",
      desc: "Although he been away from the big screen for almost a decade, the chants of Laut ao Imran Khan haven subsided. Vogue India experiences the charm of Bollywood favourite romcom hero first- hand.",
      name: "SADAF SHAIKH",
      date: "6 FEBRUARY 2024",
    },
  ];

  useEffect(() => {
    (function initial() {
      main.current.src = data[curr - 2].img;
      incoming.current.src = data[(curr - 1) % data.length].img;
    })();
  }, []);

  function test() {
    if (detsIdx === 4) {
      setDetsIdx(2);
    } else {
      setDetsIdx(detsIdx + 1);
    }
  }

  const imgChange = () => {
    let tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        if (curr > 2) curr = 0;
        incoming.current.classList.remove("z-10");
        incoming.current.classList.add("z-20");
        incoming.current.classList.remove("incoming");

        main.current.classList.remove("z-20");
        main.current.classList.add("z-10");

        gsap.set(".main", {
          scale: 1,
          opacity: 1,
        });
        main.current.classList.remove("main");

        incoming.current.classList.add("main");
        main.current.classList.add("incoming");
        if (curr > data.length - 1) curr = 0;
        main.current.src = data[detsIdx % 3].img;

        [main.current, incoming.current] = [incoming.current, main.current];
        curr++;
      },
    });

    tl.to(
      ".main",
      {
        scale: 1.1,
        opacity: 0,
        duration: 0.9,
      },
      "a"
    );
    tl.from(
      ".incoming",
      {
        scale: 0.9,
        opacity: 0,
        duration: 1,
      },
      "a"
    );
    tl.from(
      ".box",
      {
        scale: 0.9,
        opacity: 0,
        duration: 1,
      },
      "a"
    );
    tl.from(
      ".dets-el",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      },
      "a"
    );
  };

  const handleHover1 = ()=>{
    gsap.to(".up",{
      duration: 0.5,
      opacity: 1,
      top:0
    })
  };
  const handleHover2 = ()=>{
    gsap.to(".up",{
      duration: 0.5,
      opacity: 0,
      top:"100%"
    })
  };
  return (
    <div className="landpage w-full h-screen relative bg-[#dbdbdb]">
      <div className="absolute z-30 top-[55%] -translate-y-1/2 -left-[10%] -rotate-90">
        <h1 className="text-[10vw] leading-[6vw] font-[Vogue]">VOGUE</h1>
        <h3 className="text-[1.5vw] text-end font-semibold tracking-[1.2rem]">
          INDIA
        </h3>
      </div>
      <div className="h-full w-full flex items-center">
        <div className="w-[95%] mt-14 h-[88%] flex justify-center gap-10">
          <div className="relative w-[50%] h-full flex items-center justify-center">
            <div className="box w-60 h-60 absolute right-[3%] bottom-[-1%] z-2 bg-black ">
              <div className="w-56 h-56 bg-[#dbdbdb]"></div>
            </div>
            <div className="imgs relative z-20 h-[85vh] w-[42vw] overflow-hidden">
              <img
                ref={main}
                className="main absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full object-cover object-top"
                src="src\assets\Landpage img 1.jpg"
                alt=""
              />
              <img
                ref={incoming}
                className="incoming absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-full object-cover object-top"
                src="src\assets\Landpage img 2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-[40%] relative h-full px-5 py-16">
            <div className="dets">
              <div className="overflow-hidden w-fit">
                <h3 className="dets-el text-xl font-medium mb-4">
                  {data[detsIdx - 2].tag}
                </h3>
              </div>
              <div className="overflow-hidden w-fit">
                <h2 className="dets-el text-[2vw] mb-4 font-semibold tracking-tight leading-none">
                  {data[detsIdx - 2].title}
                </h2>
              </div>
              <div className="overflow-hidden w-fit">
                <h4 className="dets-el text-[1.5vw] tracking-tighter leading-tight w-[70%]">
                  {data[detsIdx - 2].desc}
                </h4>
              </div>
              <div className="overflow-hidden w-fit">
                <h2 className="dets-el text-[1.7vw] font-semibold mt-4">
                  BY <span className="underline">{data[detsIdx - 2].name}</span>
                </h2>
              </div>
              <div className="overflow-hidden w-fit">
                <h3 className="dets-el font-medium">
                  {data[detsIdx - 2].date}
                </h3>
              </div>
            </div>
            <div className="btns w-full absolute bottom-24 left-5">
              <button
              onMouseEnter={handleHover1}
              onMouseLeave={handleHover2}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    imgChange();
                    test();
                  }
                }}
                className="relative border ease-in duration-300 overflow-hidden hover:text-zinc-50 border-zinc-900 bg-transparent px-4 py-1 flex items-center justify-center text-xl font-semibold" >
                <span className="relative z-20">NEXT</span>
                <span className="inline-flex relative z-20 items-center justify-center w-[2vw] h-[2vw]">
                  <FaArrowRightLong size={"1.2vw"} />
                </span>
                <span className="up inline-block opacity-0 top-[100%] absolute w-32 h-10 bg-black"></span>
              </button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Landing;