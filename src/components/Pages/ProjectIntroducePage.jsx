// 20240406: 작업자 : 정은우
import React from 'react'
import '@styles/ProjectIntroducePage.css'
import ProjectIntroduceMember from '@/components/projectIntroduce/ProjectIntroduceMember'
import ProjectIntroduceOverview from '@/components/projectIntroduce/ProjectIntroduceOverview'
import ProjectSelectCarousel from '@/components/projectIntroduce/ProjectSelectCarousel'
import {motion} from 'framer-motion'

const ProjectIntroducePage = () => {

  return (
    <div className="w-full h-screen page-container">
      <div className="flex justify-center w-full h-full">
        <div className="items-center justify-center flex-col flex ">
          {/* 배너: 상단 프로젝트 소개 케러셀 */}
          <div className="flex w-auto h-auto">
            <motion.div
              initial={{ opacity:0, x: -200 }}
              whileInView={{ opacity:1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                x: { duration: 1 }
              }}>
              <ProjectIntroduceMember />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{    
                ease: 'easeInOut',
                duration: 0.5,
                x: { duration: 1 }
              }}>
              {/* 배너: 좌측 프로젝트 팀원별 작업내용 캐러셀 */}
              <ProjectSelectCarousel />
              {/* 콘텐츠: 화면 중앙 콘텐츠 내용 출력 */}
              <ProjectIntroduceOverview />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIntroducePage
