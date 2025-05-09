// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/layout/MainLayout';
import HomePage from './pages/layout/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout을 페이지 공통 레이아웃으로 설정 */}
        <Route path="/" element={<MainLayout />}>
          {/* index 경로 ("/")일 때 HomeView */}
          <Route index element={<HomePage />} />
          {/* 나중에 더 페이지를 추가하려면 여기에 계속 Route를 적으면 됩니다 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
