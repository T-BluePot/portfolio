// 20240406: 작업자 : 정은우
import React from 'react'
import '@styles/ProjectIntroducePage.css'

const ProjectIntroducePage = () => {
  return (
    <div className="w-full h-screen page-container">
      <div className="flex justify-center w-full h-full">
        <div className="items-center justify-center flex-col flex ">
            {/* 배너: 상단 프로젝트 소개 케러셀 */}
          <div className="justify-end flex px-auto pb-6 w-full">
            <div className="flex bg-white w-[700px] h-[50px] rounded-xl"></div>
          </div>
          <div className="flex w-auto h-auto">
            {/* 배너: 좌측 프로젝트 팀원별 작업내용 캐러셀 */}
            <div className="bg-red-500 w-[100px] rounded-xl mr-6"></div>
            {/* 콘텐츠: 화면 중앙 콘텐츠 내용 출력 */}
            <div className=" flex bg-white w-[700px] h-[350px] rounded-xl">
              <div className=" w-1/2 h-full">
                <div className="py-6 pl-4 w-full h-full">
                  <div className="bg-blue-500 w-full h-full"></div>
                </div>
              </div>
              <div className=" w-1/2 h-full">
                <div className="py-6 pl-4 w-full h-full">
                  <div className="bg-blue-500 w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIntroducePage
