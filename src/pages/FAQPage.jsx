import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import WhatsAppChat from '../components/WhatsAppChat'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-black mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about my services, process, and working together
            </p>
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}