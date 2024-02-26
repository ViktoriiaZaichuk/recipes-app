import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import Register from './pages/register';
import RegisterSuccess from './pages/register/RegisterSuccess';
import Login from './pages/login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/register/success',
      element: <RegisterSuccess />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);


  return (
    <div className='bg-light'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
