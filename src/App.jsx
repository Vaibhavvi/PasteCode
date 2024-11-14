import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';
import Paste from './components/Paste';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
      },
      {
        path:'/paste',
        element:
        <div>
          <Navbar/>
          <Paste/>
          <Footer/>
        </div>
      },
      {
        path:'/paste/:id',
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
          <Footer/>
        </div>
      },
    ]
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
