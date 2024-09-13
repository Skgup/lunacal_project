import React from 'react'

function About() {
    return (
        <>
         <div className="bg-gray-800 rounded-lg shadow-md p-4  w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center items-center   border border-gray-00 rounded-[50%] w-[30px] h-[30px]  ">
          <span className="text-gray-400 text-xl m-auto ">?</span>
        </div> 
        <div className='w-[95%] bg-black h-[60px] flex justify-center items-center  rounded-3xl '>
        <div className="flex gap-4 py-11  ">
          <button className="bg-gray-950  hover:bg-gray-900 text-white font-bold py-2 px-14 text-[18px] rounded-xl">About Me</button>
          <button className="bg-gray-950  hover:bg-gray-900 text-white font-bold py-2 px-14 text-[18px] rounded-xl">Experiences</button>
          <button className="bg-gray-950  hover:bg-gray-900 text-white font-bold py-2 px-14 text-[18px] rounded-xl">Recommended</button>
        </div></div>
      </div>
<div className="flex justify-between items-center mb-4">
      <div className="flex justify-center items-center mb-4">
        <span className="text-gray-500 text-xl mr-2">
       
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg"> <rect x="20" y="40" width="60" height="20" fill="#444444"/> <rect x="20" y="70" width="60" height="20" fill="#444444"/> <rect x="20" y="100" width="60" height="20" fill="#444444"/> <rect x="70" y="40" width="60" height="20" fill="#444444"/> <rect x="70" y="70" width="60" height="20" fill="#444444"/> <rect x="70" y="100" width="60" height="20" fill="#444444"/> </svg>
        </span>
      </div>

      <p className="text-gray-400 text-md mb-4">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
        working at this awesome company for 3 years now.
      </p>
      <p className="text-gray-400 text-md mb-4">
        I was born and raised in Albany, NY & have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters- Emma and Ella. Both of them are just starting school,
        so my calendar is usually blocked between 9-10 AM. This is a...
      </p></div>
  </div>
        </>
    )
}

export default About
