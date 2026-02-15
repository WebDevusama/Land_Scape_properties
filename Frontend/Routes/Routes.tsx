// import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Properties from '../src/pages/Properties'
import Listings from '../src/pages/Listings'
import About from '../src/pages/About'
import Dashboard from '../src/pages/Dashboard'
import Auth from '../src/pages/Auth'

export default function AppRoutes() {
  return (
    <RouterRoutes>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/about" element={<About />} />
      
    </RouterRoutes>
  )
}
