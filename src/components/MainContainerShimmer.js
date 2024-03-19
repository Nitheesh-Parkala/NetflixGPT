import React from 'react'

const MainContainerShimmer = () => {
  return (
    <div  className=' w-fit bg-black'>
      <div className='flex flex-row justify-between pt-80 z-20 h-[100%] px-9 w-screen aspect-video '>
        <div className='md:w-5/12'>
            <div className=' w-[50%] h-20 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=" w-[50%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-5"></div>
            <div className=" w-[50%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-2"></div>
            <div className=" w-[50%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default MainContainerShimmer;