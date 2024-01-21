import { createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import Login from '@/views/auth/Login';
import Register from '@/views/auth/Register';
import Home from '@/views/home';
import OrgPage from '@/views/org/orgPage';
import StationPage from '@/views/org/stationPage';
import UserPage from '@/views/org/userPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/org/org',
        element: <OrgPage />,
      },
      {
        path: '/org/station',
        element: <StationPage />,
      },
      {
        path: '/org/user',
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
