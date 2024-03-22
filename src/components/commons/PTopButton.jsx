import React from 'react'
import '@/styles/commons/PTopButton.css'
import PScrollTop from '@/assets/top.svg?react'

const PTopButton = () => {
  return (
    <div className="flex justify-end">
      <button id="top">
        <PScrollTop />
      </button>
    </div>
  )
}

export default PTopButton
