import React from 'react'
// import First from './First'
import Gallery from './Gallery'
import About from './About'


function Main() {
    return (
        <>
        <div className='p-6 bg-black h-[100%]'>
            <div className='h-[100vh] flex justify-between items-center ' >
                <div className='h-[80vh] bg-gray-900 w-[50%] rounded-lg' ></div>
                <div className='h-[85vh] w-[50%] rounded-lg flex  justify-between flex-col space-y-3 p-6' >
                    <div className='w-[100%]  rounded-lg '>{<About/>}</div>
                  <div className=' h-2  bg-gray-900  rounded-lg mx-10'></div>
                    <div className='w-[100%] h-[80%] bg-white rounded-lg '>{<Gallery/>}</div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Main
