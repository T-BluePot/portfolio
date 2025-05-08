import { ReactElement } from 'react';
import styles from './LinkBtn.module.scss';

export default function LinkBtnList({ icon, url }: { icon: ReactElement; url?: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.btnLine}>
      {icon}
    </a>
  );
}
