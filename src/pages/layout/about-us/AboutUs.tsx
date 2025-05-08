import styles from './AboutUs.module.scss';

import { teamMembers } from '../../../constants/teamMembers';

import TeamMemberCard from './components/TeamMemberCard';

// 팀 소개 페이지 화면
export default function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUs}>
      {teamMembers.map((mem) => {
        return (
          <div key={mem.name}>
            <TeamMemberCard name={mem.name} intro={mem.intro} image={mem.image} git={mem.git} />
          </div>
        );
      })}
    </section>
  );
}
