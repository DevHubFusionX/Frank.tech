import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import WhatsAppChat from '../components/WhatsAppChat'

export default function ServicesPage() {
  return (
    <div className="min-h-screen b">
      <Navbar />
      <main className="pt-20">
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-black mb-6">My Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions to bring your ideas to life
            </p>
          </div>
        </div>
        <Services />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}