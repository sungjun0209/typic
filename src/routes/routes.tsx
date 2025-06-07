// routes.tsx
import App from '@app/App';
import ProfilePage from '@app/pages/ProfilePage';
import SplashPage from '@app/pages/SplashPage';
import ErrorPage from '@pages/ErrorPage';
// import SplashPage from '@pages/SplashPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // path: '' 대신 사용됨
        element: <Navigate to="/splash" replace />
      },
      {
        path: 'splash',
        element: <SplashPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      }
    ]
  }
]);

export default router;
