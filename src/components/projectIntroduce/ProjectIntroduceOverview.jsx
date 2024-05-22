import React from 'react'
import {motion} from 'framer-motion'

const ProjectIntroduceOverview = () => {
  return (
    <div className=" flex gap-x-4 bg-white w-[700px] h-[350px] rounded-xl">
      <div className=" w-1/2 h-full">
        <div className="py-6 pl-4 w-full h-full">
          <div className="bg-blue-500 w-full h-full"></div>
        </div>
      </div>
      <div className=" w-1/2 h-full">
        <div className="py-6 pr-4 w-full h-full ">
          <div className="bg-blue-500 w-full h-full overflow-y-auto snap-y">
            <div className="p-3 snap-start">
              <p className="font-extrabold text-2xl">프로젝트 제목</p>
              <p className="font-normal text-lg">
                프로젝트에 대한 간략한 소개를 적는 공간
              </p>
            </div>
            <div className="p-3">
              <img src="https://www.korea.kr/newsWeb/resources/temp/images/000221/%EA%B5%AD%EB%AF%BC%EC%B7%A8%EC%97%85%EC%A7%80%EC%9B%90%EC%A0%9C%EB%8F%842.jpg"></img>
            </div>
            <div className="p-3 snap-start">
              <p className="font-extrabold text-xl">메인 기능</p>
              <p className="font-normal text-base">
                프로젝트에 대한 간략한 소개를 적는 공간 얼마나 길어질 수
                있을까요~?
              </p>
            </div>
            <div className="p-3 snap-start">
              <p className="font-extrabold text-xl">서브 기능</p>
              <p className="font-normal text-base">
                프로젝트에 대한 간략한 소개를 적는 공간 얼마나 길어질 수
                있을까요~?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIntroduceOverview
