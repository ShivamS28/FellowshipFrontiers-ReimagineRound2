import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'
// import { IoIosMenu } from "react-icons/io";
import { motion, MotionConfig } from 'framer-motion'

const Sidenav = () => {


    const [btnClick, setBtnClick] = useState(false)

    const btnClicked = () => {
        setBtnClick(!btnClick);
    }

    const navLinks = ["Fashion", "Beauty", "Vogue closet", "Wedding Wardrobe", "Horoscope", "Magazine", "Diamond festival 2022"];
    const menuLinks = ["facebook", "Instagram", "Twitter", "Youtube", "Pintrest", "flipboard"];

    const linkVariants1 = {
        open: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
        closed: (i) => ({
            y: -30,
            opacity: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <div className='h-screen w-[15vw] lg:w-[6vw]  bg-[#dbdbdb] fixed top-0 right-0 border-l-2 border-zinc-800 z-40 flex flex-col py-4 px-[1.5vw] gap-2'>

            <div className="nav">
                <nav className='py-8 px-10 flex items-center justify-between relative'>
                    <MotionConfig
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <motion.div
                            animate={btnClick ? "open" : "closed"}  // Animate prope
                            variants={{
                                open: {
                                    clipPath: "circle(100% at 50% 50%)",
                                    opacity: ["0", "0", "0", "1"]

                                },
                                closed: {
                                    clipPath: "circle(30px at 95% 5%)",
                                    opacity: ["1", "1", "1", "0"],
                                    left: "50%",
                                    top: "32%",
                                },
                            }}
                            className="toggle-menu absolute top-[0%] left-[0%] -translate-x-[95%] -translate-y-[2%] w-[100vw] h-[150vh] bg-[#2A2727] text-white  p-10">
                            <div className="toggle-cont flex w-full h-full">
                                <div className="nav-left w-full h-full">
                                    <div className="nav-links flex flex-col gap-5 px-4">
                                        {navLinks.map((link, i) => (
                                            <motion.a
                                                key={i}
                                                href="#"
                                                custom={i}
                                                animate={btnClick ? "open" : "closed"}
                                                variants={linkVariants1}
                                                className="nav-link uppercase text-4xl lg:text-[3vw] text-white hover:text-red-600 h-[6vh] lg:h-[8vh] flex items-center"
                                            >
                                                {link}
                                            </motion.a>
                                        ))}
                                    </div>
                                    <div className="menu-links flex items-start flex-col mt-10 py-4">
                                        <div className="links flex gap-3">
                                            {menuLinks.map((link, i) => (
                                                <motion.a
                                                    key={i}
                                                    href="#"
                                                    custom={i + navLinks.length}
                                                    animate={btnClick ? "open" : "closed"}
                                                    variants={linkVariants1}
                                                    className="menu-link text-[1.2vw] text-white hover:text-red-500 border-[2px] border-white hover:border-red-500 uppercase px-4 py-1 rounded-full"
                                                >
                                                    {link}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </MotionConfig>


                    <div className="nav-right">
                        <MotionConfig
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <motion.div
                                animate={btnClick ? "open" : "closed"}  // Animate prope
                                variants={{
                                    open: {
                                        backgroundColor: "#EE0000",

                                    },
                                    closed: {
                                        backgroundColor: "",
                                    },
                                }}
                                className="menu w-[14vw] h-[14vw] lg:w-[5vw] lg:h-[10vh] rounded-full flex items-center justify-between p-1 flex-wrap fixed right-0 lg:right-3 top-3 z-50">
                                <div className="hand-cont w-full h-full flex items-center justify-between">
                                    <motion.div
                                        onClick={btnClicked}  // condition
                                        animate={btnClick ? "open" : "closed"}  // Animate prope
                                        className="togggle-btn w-[14vw] h-[14vw]  lg:w-[4.5vw] lg:h-[4.5vw]  relative rounded-full">
                                        <motion.span
                                            style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
                                            variants={{
                                                open: {
                                                    rotate: ["0deg", "0deg", "45deg"],
                                                    top: ["40%", "50%", "50%"],
                                                    backgroundColor: "#ffff"
                                                },
                                                closed: {
                                                    rotate: ["45deg", "0deg", "0deg"],
                                                    top: ["50%", "50%", "40%"],
                                                    backgroundColor: "#000"

                                                }
                                            }}
                                            className='absolute w-8 h-[2px] bg-zinc-600'>
                                        </motion.span>
                                        <motion.span
                                            style={{ top: "60%", left: "50%", x: "-50%", y: "-50%" }}
                                            variants={{
                                                open: {
                                                    rotate: ["0deg", "0deg", "-45deg"],
                                                    top: ["60%", "50%", "50%"],
                                                    backgroundColor: "#ffff"

                                                },
                                                closed: {
                                                    rotate: ["-45deg", "0deg", "0deg"],
                                                    top: ["50%", "50%", "60%"],
                                                    backgroundColor: "#000"

                                                }
                                            }}
                                            className='absolute w-8 h-[2px] bg-zinc-600'>
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </MotionConfig>
                    </div>
                </nav>
            </div>
            <div className="icon w-12 h-12 flex items-center justify-center">

                <CiSearch size={'8vw'} lg:size={'2.5vw'} />
            </div>
            <div className='w-12 text-center mt-10'>
                <ul>
                    {
                        ['01', '02', '03', '04', '05', '06'].map((item, idx) => (
                            <a href={"#" + item} key={idx} className='inline-block text-[#2e2e2e] mb-3 text-3xl font-semibold'>{item}</a>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidenav