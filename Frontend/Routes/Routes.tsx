import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import Home from '../src/pages/Home'
import Properties from '../src/pages/Properties'
import Listings from '../src/pages/Listings'
import About from '../src/pages/About'
import Dashboard from '../src/pages/Dashboard'
import Auth from '../src/pages/Auth'
import Footer from '../src/components/ui/Footer'
import Services from '../src/components/ui/Servies'
import Gallery from '../src/components/ui/Gallery'
import FeaturedProperties from '../src/components/ui/FeaturedProperties'
import Testimonials from '../src/components/ui/Testimonials'
import Hero from '../src/components/ui/Hero'
import ContactCTA from '../src/components/ui/ContactCTA'

export default function AppRoutes() {
  return (
    <>
      <RouterRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/about' element={<About />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/featured-properties' element={<FeaturedProperties />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact-cta' element={<ContactCTA />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        
      </RouterRoutes>
    </>
  )
}
