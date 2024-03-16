import React from 'react'
import '@styles/MainPageTitle.css'
import PfButton from '../commons/PfButton'

const MainPageTitle = () => {
  return (
    <div
      id="main"
      className="z-10 pt-48">
      <div className="title text-center text-6xl leading-tight">
        <div>세상을 푸르게</div>
        <div>가슴은 뜨겁게</div>
      </div>
      <div className="btn flex place-content-center mt-14">
        <PfButton buttonText="Contact us" />
        <PfButton buttonText="Contact us" />
      </div>
    </div>
  )
}

export default MainPageTitle
