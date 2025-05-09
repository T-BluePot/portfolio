import styles from './TeamIntro.module.scss';
import { motion } from 'framer-motion';

import { Colors } from '@/styles/colors';

export default function TeamIntro() {
  return (
    <section id="team-intro" className={styles.TeamIntro}>
      <div className={styles.content}>
        <div>
          <motion.h1
            className={styles.title}
            initial={{
              opacity: 0,
              y: 40,
              color: Colors.gray3,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              color: Colors.pink1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            푸른핫가마,
          </motion.h1>
          <motion.h1
            className={styles.title}
            initial={{
              opacity: 0,
              y: 40,
              color: Colors.gray3,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              color: Colors.blue1,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            함께 만든 불꽃
          </motion.h1>
        </div>
        <motion.p
          className={styles.subTitle}
          initial={{
            opacity: 0,
            y: 40,
            color: Colors.gray3,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            color: Colors.black,
          }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          소박하지만 뜨거운 열정이 모여, <br />
          다양한 도전 속에서 함께 성장해온 우리의 이야기입니다.
        </motion.p>
      </div>
    </section>
  );
}
