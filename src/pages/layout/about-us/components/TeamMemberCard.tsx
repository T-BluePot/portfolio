import styles from './TeamMemberCard.module.scss';
import LinkList, { LinkListProps } from './LinkList';

type TeamIntroProps = {
  image: string;
  name: string;
  intro: string;
} & LinkListProps;

export default function TeamMemberCard({
  image,
  name,
  intro,
  git = false,
  notion = false,
  velog = false,
  other1 = false,
  other2 = false,
  other3 = false,
  gitUrl,
  velogUrl,
  notionUrl,
  url1,
  url2,
  url3,
}: TeamIntroProps) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={name} className={styles.profileImage} />
      <div className={styles.introText}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.intro}>{intro}</p>
      </div>
      <LinkList
        git={git}
        notion={notion}
        velog={velog}
        other1={other1}
        other2={other2}
        other3={other3}
        gitUrl={gitUrl}
        velogUrl={velogUrl}
        notionUrl={notionUrl}
        url1={url1}
        url2={url2}
        url3={url3}
      />
    </div>
  );
}
