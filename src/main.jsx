import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import AboutUs from './pages/About-us.jsx'
import Contact from './pages/Contact-us.jsx'
import Gallery from './pages/Gallery.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="booking" element={<Booking/>} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<Contact/>} />
      <Route path="gallery" element={<Gallery/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

