// routes.tsx
import App from '@app/App';
import ServiceMenuPage from '@app/pages/ServiceMenuPage';
import ErrorPage from '@pages/ErrorPage';
import SplashPage from '@pages/SplashPage';
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
        path: 'service',
        element: <ServiceMenuPage />
      }
    ]
  }
]);

export default router;
