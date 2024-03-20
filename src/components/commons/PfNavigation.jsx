import React from 'react'
import '@/styles/commons/PfNavigation.css'
import IconHamburger from './IconHamburger'
import PfButton from './PfButton'
import PfBluePotLogo from '@/assets/pf-blue-pot-logo.svg?react'

const PfNavigation = () => {
  return (
    <div>
      <div className="pf-bar w-full h-14 fixed"></div>
      <div className="w-full h-14 flex fixed z-[999]">
        <div className="w-full h-full flex flex-1 items-center">
          <IconHamburger className=""></IconHamburger>
        </div>
        <div className="w-full h-full flex flex-[2_2_0%] justify-center items-center">
          <PfBluePotLogo
            width="24"
            height="30"
            fill="white"
          />
        </div>
        <div className="w-full min-w-36 h-full flex flex-1 justify-end ">
          <PfButton buttonText="Contact us" />
        </div>
      </div>
    </div>
  )
}

export default PfNavigation
