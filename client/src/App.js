import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import Register from './pages/register';
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
      path: '/login',
      element: <Login />,
    },
  ]);


  return (
    <div className="App ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
