import {React, useEffect} from 'react'
import { motion } from 'framer-motion'
import '@/styles/commons/PSlidingButton.css'
import PScrollArrow from '@/assets/arrow.svg?react'

const PSlidingButton = () => {
  // const { scrollY, scrollYProgress } = useScroll();
  useEffect(()=>{})
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={false}
      transition={{
        // animate state까지 어떻게 변할지 정하는 옵션
        // 여러 transition type을 정의 할 수 있다.
        ease: 'easeInOut',
        duration: 0.5
      }}
      className="flex justify-center">
      <button id="arrow">
        <PScrollArrow />
      </button>
    </motion.div>
  )
}

export default PSlidingButton
