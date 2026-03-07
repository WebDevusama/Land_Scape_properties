import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import FeaturedProperties from "@/components/ui/FeaturedProperties";
import Services from "@/components/ui/Servies"; 
import Gallery from "@/components/ui/Gallery";
import Testimonials from "@/components/ui/Testimonials";
import ContactCTA from "@/components/ui/ContactCTA";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return <div>

    <Navbar />

    <Hero />
    <FeaturedProperties />
    <Services />
    <Gallery />
    <Testimonials />
    <ContactCTA />
    <Footer />


  </div>;

}
