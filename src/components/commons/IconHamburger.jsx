import React from 'react'

const IconHamburger = () => {
  return (
    
      <button className="group w-[50px] h-[50px]">
        <div className="flex overflow-hidden items-center justify-center w-full h-full transform transition-all duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-gray-900 h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div className="bg-gray-900 h-[3px] w-7 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div className="bg-gray-900 h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>
    
  )
}

export default IconHamburger