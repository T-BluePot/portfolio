import React from 'react'
import '@/styles/commons/PfNavigation.css'
import IconHamburger from './IconHamburger'
import PfButton from './PfButton'
// import { ReactComponent as PfBluePotLogo } from '@/assets/pf-blue-pot-logo.svg'

const PfNavigation = () => {
  return (
    <div className="w-full h-14 pf-navigation flex">
      <div className="w-full h-full flex flex-1 items-center bg-red-500">
        <IconHamburger className=""></IconHamburger>
      </div>
      <div className="w-full h-full flex flex-[2_2_0%] bg-blue-500">
        {/* <PfBluePotLogo width="24" height="30" fill="white"/> */}
      </div>
      <div className="w-full min-w-36 h-full flex flex-1 justify-end  bg-red-500">
        <PfButton buttonText="Contact us" />
      </div>
    </div>
  )
}

export default PfNavigation
