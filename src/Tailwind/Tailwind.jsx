import React from 'react'

const Tailwind = () => {
  return (
    <div>
        <h1 className='bg-amber-300 text-9xl text-red-950'>Hello</h1>
        <div className='flex'>

        <div className='w-[50%] h-[400px] bg-red-500'></div>
        <div className='w-[50%] h-[330px] bg-green-500'></div>
        </div>

        <div className='xl:flex xl:flex-wrap mt-10 px-10 justify-center gap-20'>
            <div className="w-[250px] h-[250px] bg-red-500"></div>
            <div className="w-[250px] h-[250px] bg-green-500"></div>
            <div className="w-[250px] h-[250px] bg-yellow-300"></div>
            <div className="w-[250px] h-[250px] bg-blue-500"></div>
        </div>

        <button className='bg-blue-300 px-7 py-3 rounded-2xl mt-10 hover:bg-red-500 hover:text-white'>
            Click Me
        </button>

        {/* <div>
            .
        </div> */}
    </div>
  )
}

export default Tailwind
