import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import { RouterProvider,BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Root from './root.jsx'
import About from './components/about/about.jsx'
import Contact from './components/Contact/Contact.jsx'

const router=createBrowserRouter([{
  path: '/',
  element: <Root />,
  children:[
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
