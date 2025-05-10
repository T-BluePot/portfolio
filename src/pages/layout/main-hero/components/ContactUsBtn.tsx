import { ReactElement } from 'react';
import styles from './ContactUsBtn.module.scss';

interface ContactUsBtnProps {
  contactHref: string;
  title: string;
  icon: ReactElement;
}

export default function ContactUsBtn({ contactHref, title, icon }: ContactUsBtnProps) {
  return (
    <a className={styles.button} href={contactHref} target="_blank" rel="noopener noreferrer">
      {icon}
      <p>{title}</p>
    </a>
  );
}
