import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';

const Login = React.lazy(() => import('@/views/auth/Login'));
const Register = React.lazy(() => import('@/views/auth/Register'));
const Home = React.lazy(() => import('@/views/home'));
const OrgPage = React.lazy(() => import('@/views/org/orgPage'));
const StationPage = React.lazy(() => import('@/views/org/stationPage'));
const UserPage = React.lazy(() => import('@/views/org/userPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <React.Suspense fallback={<>...</>}>
            <Login />
          </React.Suspense>
        ),
      },
      {
        path: '/register',
        element: (
          <React.Suspense fallback={<>...</>}>
            <Register />
          </React.Suspense>
        ),
      },
      {
        path: '/org/org',
        element: (
          <React.Suspense fallback={<>...</>}>
            <OrgPage />
          </React.Suspense>
        ),
      },
      {
        path: '/org/station',
        element: (
          <React.Suspense fallback={<>...</>}>
            <StationPage />
          </React.Suspense>
        ),
      },
      {
        path: '/org/user',
        element: (
          <React.Suspense fallback={<>...</>}>
            <UserPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
