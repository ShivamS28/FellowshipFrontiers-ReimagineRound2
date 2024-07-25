import React from 'react';
import { CiSaveDown2 } from "react-icons/ci";
import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";

const FollowRight = () => {
  const features = [
    { icon:<CiSaveDown2 size={"3vw"}/> , title: 'Offline Reading', description: 'Download issues to read offline' },
    { icon:<MdOutlineExplore size={"3vw"}/>, title: 'Explore', description: 'Explore various articles' },
    { icon:<IoArchiveOutline size={"3vw"}/>, title: 'Access to Archives', description: 'Unlimited access to past issues' },
    { icon:<CiBookmarkPlus size={"3vw"}/>, title: 'Bookmark', description: 'Bookmark articles to read later' },
  ];

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg space-y-4">
      <div className='w-full flex items-center justify-center'>
        <h2 className='text-center text-[1.3vw] font-semibold uppercase px-3 py-1 bg-white text-zinc-950'>Features</h2>
      </div>
      <div className='w-[22vw] py-5 flex items-center justify-center flex-wrap gap-[2vw]'>
      {features.map((feature, index) => (
        <div className='w-[45%] pl-2 flex flex-col items-center justify-center gap-2' key={index}>
          <h3 className="uppercase text-center font-semibold">{feature.title}</h3>
            <span>{feature.icon}</span>
          <p className="text-sm text-center opacity-75">{feature.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FollowRight;