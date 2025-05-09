import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

import clsx from 'clsx';
import { LOGO } from '@/constants/images';
import HamburgerButton from './HamburgerButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false); // 스크롤 여부를 감지

  const onScroll = () => {
    // 10px 초과 스크롤 될 경우 감지
    setScrolled(window.scrollY > 10);
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 믿어 주세요...저는 더미 공간입니다 */}
      <div className={styles.placeholder} />

      <header className={clsx(styles.header, scrolled && styles.scroll)}>
        <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
        <img src={LOGO} alt="푸른핫가마 로고" className={styles.logo} />
        <p>똥</p>
      </header>
    </>
  );
}
