import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Stats from './Stats'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Contact from './Contact'
import WhatsAppChat from './WhatsAppChat'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="work"><Work /></section>
        <Stats />
        <Testimonials />
        <CTA />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}