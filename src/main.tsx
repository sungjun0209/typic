import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/routes.tsx';
import { UserProvider } from './contexts/UserContext'; // ✅ 추가 경로 주의

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider> {/* ✅ 여기에 Context로 감싸줍니다 */}
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);