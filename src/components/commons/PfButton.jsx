import React from 'react'
import "@/styles/commons/PfButton.css"

const PfButton = (props) => {
  return (
    <button class="pf-button-container min-w-8 text-white font-normal m-3 py-3 px-4 text-base rounded-lg flex justify-center items-center">
      <p>
      {props.buttonText}
      </p>
    </button>
  )
}

export default PfButton