import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import WhatsAppChat from '../components/WhatsAppChat'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-black mb-6">My Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my latest projects and see the results I've delivered for clients
            </p>
          </div>
        </div>
        <Work />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}