import React from 'react'

const IconHamburger = () => {
  return (
    
      <button class="group w-[50px] h-[50px]">
        <div class="flex overflow-hidden items-center justify-center w-full h-full transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-gray-900 h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div class="bg-gray-900 h-[3px] w-7 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div class="bg-gray-900 h-[3px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>
    
  )
}

export default IconHamburger