import { createBrowserRouter } from 'react-router-dom';
import Login from '@/views/auth/Login';
import Register from '@/views/auth/Register';
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
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
