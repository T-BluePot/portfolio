import styles from './LinkList.module.scss';
import LinkBtnList from './LinkBtn';

import { BsGithub } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';
import { SiVelog } from 'react-icons/si';
import { IoLinkOutline } from 'react-icons/io5';

export type LinkListProps = {
  git?: boolean;
  notion?: boolean;
  velog?: boolean;
  other1?: boolean;
  other2?: boolean;
  other3?: boolean;

  gitUrl?: string;
  velogUrl?: string;
  notionUrl?: string;
  url1?: string;
  url2?: string;
  url3?: string;
};

export default function LinkList({
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
}: LinkListProps) {
  return (
    <div className={styles.list}>
      {git && <LinkBtnList icon={<BsGithub className={styles.git} />} url={gitUrl} />}
      {notion && <LinkBtnList icon={<SiNotion className={styles.notion} />} url={notionUrl} />}
      {velog && <LinkBtnList icon={<SiVelog className={styles.velog} />} url={velogUrl} />}
      {other1 && <LinkBtnList icon={<IoLinkOutline className={styles.link} />} url={url1} />}
      {other2 && <LinkBtnList icon={<IoLinkOutline className={styles.link} />} url={url2} />}
      {other3 && <LinkBtnList icon={<IoLinkOutline className={styles.link} />} url={url3} />}
    </div>
  );
}
