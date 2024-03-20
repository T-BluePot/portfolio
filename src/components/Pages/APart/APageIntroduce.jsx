import React from 'react'
import '@styles/APageIntroduce.css'

const APageIntroduce = () => {
  return (
    <div
      id="pageI"
      className="w-full h-screen">
      <div className="pt-44">
        <div className="iTitle text-center">팀원 소개</div>
        <div
          id="imageFace"
          className="pt-10 flex flex-wrap place-content-center">
          <div className="faceImg w-64 h-64 mr-5"></div>
          <div className="faceImg w-64 h-64 ml-5"></div>
        </div>
      </div>
    </div>
  )
}

export default APageIntroduce
