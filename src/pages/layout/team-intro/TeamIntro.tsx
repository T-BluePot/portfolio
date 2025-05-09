import styles from './TeamIntro.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Colors } from '@/styles/colors';

export default function TeamIntro() {
  const { scrollY } = useScroll();
  return (
    <section id="team-intro" className={styles.TeamIntro}>
      <motion.h1
        initial={{
          opacity: 0,
          y: 0,
          color: Colors.gray3,
        }}
      >
        푸른핫가마,
      </motion.h1>
    </section>
  );
}
