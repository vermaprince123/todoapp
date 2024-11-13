import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './common/ErrorBoundary';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
