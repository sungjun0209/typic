// routes.tsx
import App from '@app/App';
import ErrorPage from '@pages/ErrorPage';
// import SplashPage from '@pages/SplashPage';
import LoginPage from '@pages/LoginPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // path: '' 대신 사용됨
        element: <Navigate to="/login" replace />
      },
      {
        path: 'splash',
        element: <LoginPage />
      }
    ]
  }
]);

export default router;
