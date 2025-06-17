import { motion } from 'framer-motion';
import Wave from 'react-wavify';
import { Colors } from '@/styles/colors';

import styles from './WaveOne.module.scss';

export default function WaveOne() {
  return (
    <motion.div
      className={styles.waveFramer}
      initial={{ y: 300 }} // 시작 상태: 흐리고 아래에 있음
      whileInView={{ y: 1 }} // 뷰포트에 들어오면: 선명 + 제자리
      transition={{ duration: 1.5, ease: 'easeOut' }} // 부드럽게 올라옴
      viewport={{ once: true }} // 한 번만 실행
    >
      <Wave
        fill={Colors.pink2}
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.3,
          points: 3,
        }}
        className={styles.wave}
      />
    </motion.div>
  );
}
