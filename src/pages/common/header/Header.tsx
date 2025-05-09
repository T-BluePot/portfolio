import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

import clsx from 'clsx';
import { LOGO } from '@/constants/images';
import HamburgerButton from './HamburgerButton';
import Menu from './Menu';

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
        <div className={styles.inner}>
          <img src={LOGO} alt="푸른핫가마 로고" className={styles.logo} />

          <nav className={styles.nav}>
            <a href="#about-us">팀원 소개</a>
            <a href="#">프로젝트 소개</a>
          </nav>

          <div className={styles.menu}>
            <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
          </div>
        </div>
      </header>

      <Menu menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
