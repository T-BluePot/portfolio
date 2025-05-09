import React from 'react';
import clsx from 'clsx';
import styles from './HamburgerButton.module.scss';

import { RxHamburgerMenu } from 'react-icons/rx';
import { FiX } from 'react-icons/fi';

interface HamburgerButtonProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}

export default function HamburgerButton({ menuOpen, setMenuOpen, scrolled }: HamburgerButtonProps) {
  return (
    <button className={styles.button} onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? (
        <FiX className={clsx(styles.icon, scrolled && styles.scrolled)} />
      ) : (
        <RxHamburgerMenu className={clsx(styles.icon, scrolled && styles.scrolled)} />
      )}
    </button>
  );
}
