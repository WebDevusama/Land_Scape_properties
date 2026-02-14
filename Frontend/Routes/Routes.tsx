// import React from 'react'
import { Routes as RouterRoutes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/Home'
import Properties from '../src/pages/Properties'
import Listings from '../src/pages/Listings'
import About from '../src/pages/About'
import Dashboard from '../src/pages/Dashboard'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <RouterRoutes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/about" element={<About />} />
    </RouterRoutes>
    </BrowserRouter>
  )
}
