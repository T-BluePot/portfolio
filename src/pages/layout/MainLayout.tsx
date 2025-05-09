import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

import Header from '../common/header/Header';

export default function MainLayout() {
  return (
    <main id="main-layout" className={styles.layout}>
      <Header />
      {/* 이 자리에 HomeView 혹은 AboutView가 렌더링됩니다 */}
      <Outlet />
      <div>Footer</div>
    </main>
  );
}
