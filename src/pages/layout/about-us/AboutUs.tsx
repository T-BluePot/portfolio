import styles from './AboutUs.module.scss';

import TeamCarousel from './components/TeamCarousel';

// 팀 소개 페이지 화면
export default function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <h1 className={styles.aboutTitle}>Team Member</h1>
      <TeamCarousel />
    </section>
  );
}
