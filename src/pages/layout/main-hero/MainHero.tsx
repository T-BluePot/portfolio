import styles from './MainHero.module.scss';
import ContactUsBtn from './components/ContactUsBtn';

import { blueGitLink, blueNotionLink } from '@/constants/links';

import { IoLogoGithub } from 'react-icons/io';
import { RiNotionFill } from 'react-icons/ri';

export default function MainHero() {
  return (
    <section className={styles.mainHero}>
      <h1 className={styles.title}>
        세상을 푸르게
        <br />
        가슴은 뜨겁게
      </h1>
      <div className={styles.iconComponent}>
        <ContactUsBtn
          title="Team Github"
          icon={<IoLogoGithub className={styles.icon} />}
          contactHref={blueGitLink}
        />
        <ContactUsBtn
          title="Team Notion"
          icon={<RiNotionFill className={styles.icon} />}
          contactHref={blueNotionLink}
        />
      </div>
    </section>
  );
}
