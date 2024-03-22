import React from 'react'
import '@/styles/commons/PSlidingButton.css'
import PScrollArrow from '@/assets/arrow.svg?react'

const PSlidingButton = () => {
  return (
    <div className="flex justify-center">
      <button id="arrow">
        <PScrollArrow />
      </button>
    </div>
  )
}

export default PSlidingButton
