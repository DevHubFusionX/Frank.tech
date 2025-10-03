import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import WhatsAppChat from '../components/WhatsAppChat'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-black mb-6">Tech Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </div>
        </div>
        <Blog />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}