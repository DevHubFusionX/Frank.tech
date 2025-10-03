import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Skills from '../components/Skills'
import TechStack from '../components/TechStack'
import GitHubContributions from '../components/GitHubContributions'
import ClientLogos from '../components/ClientLogos'
import WhatsAppChat from '../components/WhatsAppChat'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-black mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and experience as a Full-Stack MERN Developer
            </p>
          </div>
        </div>
        <Experience />
        <Education />
        <Certifications />
        <TechStack />
        <Skills />
        <GitHubContributions />
        <ClientLogos />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}