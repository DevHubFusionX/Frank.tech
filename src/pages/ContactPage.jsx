import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat'
const ContactPage = () => {
    return (
      <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
              <div className="py-20">
                  <div className="max-w-4xl mx-auto px-6 text-center">
                      <h1 className="text-5xl font-bold text-black mb-6">Contact Me</h1>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                         Get in-touch so we can bring your idea to life 
                      </p>
                  </div>
              </div>
             <Contact/>
            </main>
            <Footer />
            <WhatsAppChat />
        </div>
    )
}

export default ContactPage
