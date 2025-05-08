import styles from './AboutUs.module.scss';

import TeamCarousel from './components/TeamCarousel';

// 팀 소개 페이지 화면
export default function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <TeamCarousel />
    </section>
  );
}
