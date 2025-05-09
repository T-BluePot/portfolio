import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.scss';

export default function Menu({ menuOpen, onClose }: { menuOpen: boolean; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, onClose]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div ref={menuRef} className={styles.menu}>
          <ul>
            <li className={styles.list} onClick={() => scrollToSection('about-us')}>
              팀원 소개
            </li>
            <li className={styles.list}>프로젝트 소개</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
