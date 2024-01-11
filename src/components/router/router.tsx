import { createBrowserRouter } from 'react-router-dom';
import Login from '@/views/auth/Login';
import Home from '@/views/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
