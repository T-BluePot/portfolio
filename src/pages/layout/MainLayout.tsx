import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <main id="main-layout">
      <div>Header</div>
      {/* 이 자리에 HomeView 혹은 AboutView가 렌더링됩니다 */}
      <Outlet />
      <div>Footer</div>
    </main>
  );
}
